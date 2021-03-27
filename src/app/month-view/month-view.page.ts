import { Component, OnInit } from '@angular/core';

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
  monthView = this.Month();

  constructor() {   }

  ngOnInit() {
    
  }

  Month() {

    var r;
    var days, daysInWeek = 0;
    var week = [];
    var month = [];

    console.log("Month enter");
    for (r=0; r<this.firstDay; r++){
      days++;
      daysInWeek++;
      //week.push(r);
      week.push(this.numbersDaysInPriorMonth-this.firstDay+r)
    }
    console.log("Month mid");
    while (days < this.numbersDaysInCurrentMonth) {

      days++;
      daysInWeek++;
      week.push(days);

      if (daysInWeek == 7){
        daysInWeek = 0;
        month.push(week);
        week = [];
      }
    }
    
    console.log(month);
    return month;
  }
}
