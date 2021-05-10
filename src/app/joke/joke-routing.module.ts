import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JokePage } from './joke.page';

const routes: Routes = [
  {
    path: '',
    component: JokePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JokePageRoutingModule {}
