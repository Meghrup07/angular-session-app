import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/authGaurd/auth.guard';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: 'auth'
  },
  {
    path: 'auth',
    loadChildren: () => import('./components/auth/auth-route.module').then(m => m.AuthRouteModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./components/pages/dashboard/dashboard-route.module').then(m => m.DashboardRouteModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'member',
    loadChildren: () => import("./components/pages/members/member-route.module").then(m => m.MemberRouteModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
