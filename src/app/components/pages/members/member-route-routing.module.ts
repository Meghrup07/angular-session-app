import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberAddComponent } from './member-add/member-add.component';

const routes: Routes = [
  {
    path: "memberList",
    component: MemberListComponent
  },
  {
    path: "memberAdd",
    component: MemberAddComponent
  },
  {
    path: "memberAdd/:id",
    component: MemberAddComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MemberRouteRoutingModule { }
