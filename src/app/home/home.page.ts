import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {

    let map_name = new Map<string, string>();

    map_name.set("A", "1")
    map_name.set("B", "2")
    map_name.set("C", "3")

    map_name.forEach((string) => console.log(string));

  }

}
