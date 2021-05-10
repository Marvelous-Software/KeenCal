import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { DbService } from './../services/db.service';

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.page.html',
  styleUrls: ['./day-view.page.scss'],
})
export class DayViewPage implements OnInit {
  Data: any[] = [];

  constructor(private router: Router, private db: DbService) {}

  ngOnInit() {

    console.log("Pre");

    this.db.dbState().subscribe((res) => {
      if (res) {
        this.db.fetchEvents().subscribe((item) => {
          this.Data = item;
        });
      }
    });

    console.log("Post " + this.Data);

  }

  Back() {
    this.router.navigate(['month-view']);
  }
}
