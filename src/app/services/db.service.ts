import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
//import { Day } from '../models/day';
import { Event } from '../models/event';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

//ionic cordova platform add browser
//ionic cordova run browser


@Injectable({
  providedIn: 'root'
})
export class DbService {

  private storage: SQLiteObject;
  events = new BehaviorSubject([]);
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private platform: Platform,
    private sqlite: SQLite,
    private httpClient: HttpClient,
    private sqlPorter: SQLitePorter,
  ) {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'keencal.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
          this.storage = db;
          this.init();
      });
    });
  }

  dbState() {
    return this.isDbReady.asObservable();
  }

  fetchEvents(): Observable<Event[]> {
    return this.events.asObservable();
  }

    // Create tables
    init() {
      console.log("Pre init")
      this.httpClient.get(
        'assets/dump.sql',
        {responseType: 'text'}
      ).subscribe(data => {
        this.sqlPorter.importSqlToDb(this.storage, data)
          .then()
          .catch(error => console.error(error));
      });
      console.log("Post init")
    }

  // Get list
  getEvents(){
    return this.storage.executeSql('SELECT * FROM Events', []).then(res => {
      let items: Event[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id: res.rows.item(i).id,
            description: res.rows.item(i).description,
            start: res.rows.item(i).start,
            stop: res.rows.item(i).stop,
            location: res.rows.item(i).location,
            recurring: res.rows.item(i).recurring,
            ringer_disable: res.rows.item(i).ringer_disable
           });
        }
      }
      this.events.next(items);
    });
  }

  // Add
  addEvent(date, description, start, stop, location, recurring, ringer_disable) {
    let data = [date, description, start, stop, location, recurring, ringer_disable];
    return this.storage.executeSql('INSERT INTO Events (date, description, start, stop, location, recurring, ringer_disable) VALUES (?, ?, ?, ?, ?, ?, ?)', data)
    .then(res => {
      this.getEvents();
    });
  }

  // Get single object
  getEvent(date): Promise<Event> {
    return this.storage.executeSql('SELECT * FROM Events WHERE date = ?', [date]).then(res => {
      return {
        id: res.rows.item(0).id,
        description: res.rows.item(0).description,
        start: res.rows.item(0).start,
        stop: res.rows.item(0).stop,
        location: res.rows.item(0).location,
        recurring: res.rows.item(0).recurring,
        ringer_disable: res.rows.item(0).ringer_disable
  }
    });
  }

  // Update
  updateEvent(id, event: Event) {
    let data = [event.description, event.start, event.stop, event.location, event.recurring, event.ringer_disable];
    return this.storage.executeSql(`UPDATE Events SET description = ?, start = ?, stop = ?, location = ?, recurring = ?, ringer_disable = ? WHERE id = ${id}`, data)
    .then(data => {
      this.getEvents();
    })
  }

  // Delete
  deleteSong(id) {
    return this.storage.executeSql('DELETE FROM Events WHERE id = ?', [id])
    .then(_ => {
      this.getEvents();
    });
  }
}
