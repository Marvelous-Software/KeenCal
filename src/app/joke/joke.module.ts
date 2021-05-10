import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JokePageRoutingModule } from './joke-routing.module';

import { JokePage } from './joke.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JokePageRoutingModule
  ],
  declarations: [JokePage]
})
export class JokePageModule {}
