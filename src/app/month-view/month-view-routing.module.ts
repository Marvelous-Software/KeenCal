import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonthViewPage } from './month-view.page';

const routes: Routes = [
  {
    path: '',
    component: MonthViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonthViewPageRoutingModule {}
