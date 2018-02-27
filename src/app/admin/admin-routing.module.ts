import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent }           from './admin.component';
import { DashboardComponent }       from './dashboard/dashboard.component';
import { MyAccountComponent }       from './my-account/my-account.component';
import { DoctorComponent }          from './doctor/doctor.component';

import { AuthGuard }                from '../auth-guard.service';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: 'my-account',     component: MyAccountComponent },
      { path: 'doctor',         component: DoctorComponent },
      { path: '',               component: DashboardComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}