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
        url : "/month-view",
        icon : "home"
      },
      {
        title : "Joke",
        url : "/joke",
        icon : "people-circle"
      }
    ]
  }
}
