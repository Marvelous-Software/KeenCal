import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router"


@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.page.html',
  styleUrls: ['./event-view.page.scss'],
})
export class EventViewPage implements OnInit {

  date: number
  dateNice: string


  constructor(private route: ActivatedRoute, private router: Router) {

    
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.date = this.router.getCurrentNavigation().extras.state.date;
        this.dateNice = new Date(this.date.toString().substr(0, 4) + "-" + this.date.toString().substr(4, 2) + "-" + this.date.toString().substr(6, 2)).toLocaleDateString()
      }
    });
  }

  ngOnInit() {
  }

  doCancel(){

  }
  doSave(){
    
  }
}
