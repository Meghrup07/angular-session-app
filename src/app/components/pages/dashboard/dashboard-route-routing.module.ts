import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const route: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: ''
  },
  {
    path: "",
    component: DashboardComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRouteRoutingModule { }
