import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
 
  navigate: any;

  constructor() {

    this.sideMenu();
    
  }


  sideMenu() {

    this.navigate = [
      {
        title : "Home",
        url : "/tabs",
        icon : "home"
      },
      {
        title : "About Us",
        url : "/aboutus",
        icon : "people-circle"
      },
      {
        title : "Contacts",
        url : "/contact",
        icon : "paper-plane"
      },
      {
        title : "Rest Demo",
        url : "/rest-demo",
        icon : "settings"
      },
      {
        title : "Weather",
        url : "/weather",
        icon : "settings"
      }
    ]
  }
}
