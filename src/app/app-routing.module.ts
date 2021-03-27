import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'month-view',
    loadChildren: () => import('./month-view/month-view.module').then( m => m.MonthViewPageModule)
  },
  {
    path: 'day-view',
    loadChildren: () => import('./day-view/day-view.module').then( m => m.DayViewPageModule)
  },
  {
    path: 'event-view',
    loadChildren: () => import('./event-view/event-view.module').then( m => m.EventViewPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
