import { Component, OnInit } from '@angular/core';
import { ApiChuckService } from '../services/api-chuck.service';
import { JokeChuck } from '../models/joke-chuck';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.page.html',
  styleUrls: ['./joke.page.scss'],
})
export class JokePage implements OnInit {

  categories: string[];
  joke: JokeChuck;


  constructor(
    public apichuckservice: ApiChuckService) {

      this.joke = new JokeChuck();

   }

  ngOnInit() {
  }

  getCategories(){
    this.apichuckservice.getList().subscribe (response => {
      console.log(response)
      this.categories = response
    }
    )
  }

  getJoke(){
    this.apichuckservice.getJoke().subscribe (response => {
      console.log(response)
      this.joke = response
    }
    )
  }

  getJokeFromCategory(category: string){
    this.apichuckservice.getJokeFromCategory(category).subscribe (response => {
      console.log(response)
      this.joke = response
    }
    )
  }

}
