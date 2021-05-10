import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { DbService } from './../services/db.service';

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.page.html',
  styleUrls: ['./event-view.page.scss'],
})

export class EventViewPage implements OnInit {

  date: number;
  dateNice: string;

  event: any = {
    Description: '',
    Start: '',
    Stop: '',
    Location: '',
    Recurring: '',
    RingerDisable: '',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private db: DbService
  ) {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.date = this.router.getCurrentNavigation().extras.state.date;
        this.dateNice = new Date(
          this.date.toString().substr(0, 4) +
            '-' +
            this.date.toString().substr(4, 2) +
            '-' +
            this.date.toString().substr(6, 2)
        ).toLocaleDateString();
      }
    });
  }

  ngOnInit() {}

  doCancel() {

    this.router.navigate(['month-view']);

  }

  doSave() {

    console.log("Pre " + this.date);

    this.db
      .addEvent(
        this.date,
        this.event.Description,
        this.event.Start,
        this.event.Stop,
        this.event.Location,
        this.event.Recurring,
        this.event.Ringer_disable
      )
      .then();

      this.router.navigate(['month-view']);

    console.log("Post " + this.event.Description);
  }
}
