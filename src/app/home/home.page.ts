import { Component } from '@angular/core';

import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  user: string = "unknown"


  constructor(private storage: Storage) {

    let map_name = new Map<string, string>();

    map_name.set("A", "1")
    map_name.set("B", "2")
    map_name.set("C", "3")

    map_name.forEach((string) => console.log(string));

  }

  ngOnInit() {

    this.storage.create();

  }

  async doGet() {

    console.log('Getting');
    await this.storage.get('user').then((val) => {
      this.user = val
    });
    console.log('Got ' + this.user);

  }

  async doSet() {

    console.log("Setting");
    await this.storage.set('user', 'John Maher')

  }

}
