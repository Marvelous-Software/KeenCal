import { Component, OnInit } from '@angular/core';

import { Day } from '../models/day';
import { MonthViewPageRoutingModule } from './month-view-routing.module';

import { Router, NavigationExtras } from "@angular/router"

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.page.html',
  styleUrls: ['./month-view.page.scss'],
})
export class MonthViewPage implements OnInit {

  monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  today = new Date()
  currentDay = new Date().getUTCDay()//Day 1-7
  currentYear = new Date().getFullYear()
  numbersDaysInCurrentMonth = new Date(this.today.getFullYear(), this.today.getMonth() + 1, 0).getDate()
  numbersDaysInPriorMonth = new Date(this.today.getFullYear(), this.today.getMonth(), 0).getDate()
  currentMonth = this.today.getMonth()
  firstDate = new Date(this.today.getFullYear(), this.today.getMonth(), 1)//1st day current month
  firstDay = this.firstDate.getDay() //0-6
  monthData = this.MonthBuild()
  monthName = this.monthNames[this.currentMonth]

  constructor(private router: Router) { }

  ngOnInit() {

  }

  ShowDay(date: number) {

    console.log(date)
    let navigationExtras: NavigationExtras = { state: { date: date } };
    this.router.navigate(['event-view'], navigationExtras);
  }

  MonthBuild() {

    var r
    var currentMonth
    var currentYear
    var previousMonth
    var previousYear
    var nextMonth
    var nextYear
    var days = 0
    var daysInWeek = 0
    var week = []
    var month = []
    var dayObj: Day


    currentMonth = this.today.getMonth()
    currentYear = this.today.getFullYear()
    previousMonth = currentMonth - 1
    previousYear = currentYear
    if (previousMonth < 0) {
      previousMonth = 11;
      previousYear--
    }
    nextMonth = nextMonth + 1
    nextYear = currentYear
    if (nextMonth > 11) {
      nextMonth = 0
      nextYear++
    }


    for (r = 0; r < this.firstDay; r++) {
      daysInWeek++
      dayObj = new Day(previousMonth, previousYear)
      dayObj.Date = this.numbersDaysInPriorMonth - this.firstDay + r + 1
      dayObj.Format = "cell-border"
      dayObj.CurrentMonth = false
      week.push(dayObj)//days are 0-6 to offset we need 1-7
    }

    while (days < this.numbersDaysInCurrentMonth) {

      days++;
      daysInWeek++;
      dayObj = new Day(currentMonth, currentYear)
      dayObj.Date = days
      dayObj.Format = "cell-current"
      dayObj.CurrentMonth = true
      week.push(dayObj);

      if (daysInWeek == 7) {
        daysInWeek = 0;
        month.push(week);
        week = [];
      }
    }

    days = 0;
    while (daysInWeek < 7) {
      days++;
      daysInWeek++;
      dayObj = new Day(nextMonth, nextYear)
      dayObj.Date = days
      dayObj.Format = "cell-border"
      dayObj.CurrentMonth = false
      week.push(dayObj);
    }

    month.push(week);
    console.log(month);
    return month;
  }
}
