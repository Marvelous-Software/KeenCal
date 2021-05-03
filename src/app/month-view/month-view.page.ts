import { Component, OnInit } from '@angular/core';

import { Day } from '../models/day';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.page.html',
  styleUrls: ['./month-view.page.scss'],
})
export class MonthViewPage implements OnInit {

  today = new Date();
  //currentDate = new Date().getMonth();//Month 0-11
  currentDay = new Date().getUTCDay();//Day 1-7
  currentYear = new Date().getFullYear();
  //currentDate = new Date(this.today.getFullYear() + "-" + (this.today.getMonth() + 1) + "-02");//1st day current month
  numbersDaysInCurrentMonth = new Date(this.today.getFullYear(), this.today.getMonth() + 1, 0).getDate();
  numbersDaysInPriorMonth = new Date(this.today.getFullYear(), this.today.getMonth(), 0).getDate();
  currentMonth = this.today.getMonth() + 1; //getMonth retuens 0-11 but the date constructor requires 1-12
  firstDate = new Date(this.today.getFullYear(), this.today.getMonth(), 1);//1st day current month
  firstDay = this.firstDate.getDay(); //0-6
  monthData = this.MonthBuild();

  constructor() {   }

  ngOnInit() {
    
  }

  ShowDay(date: number) {

    console.log(date)
    
  }

  MonthBuild() {

    var r;
    var days = 0;
    var daysInWeek = 0;
    var week = [];
    var month = [];
    var dayObj: Day

    
    for (r=0; r<this.firstDay; r++){
      daysInWeek++;
      dayObj = new Day()
      dayObj.Date = this.numbersDaysInPriorMonth-this.firstDay+r+1
      dayObj.Format = "cell-border"
      dayObj.CurrentMonth = false
      week.push(dayObj)//days are 0-6 to offset we need 1-7
    }
  
    while (days < this.numbersDaysInCurrentMonth) {
  
      days++;
      daysInWeek++;
      dayObj = new Day()
      dayObj.Date = days
      dayObj.Format = "cell-current"
      dayObj.CurrentMonth = true
      week.push(dayObj);
  
      if (daysInWeek == 7){
        daysInWeek = 0;
        month.push(week);
        week = [];
      }
    }
  
    days = 0;
    while (daysInWeek < 7) {
      days++;
      daysInWeek++;
      dayObj = new Day()
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
