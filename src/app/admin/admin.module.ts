import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { AdminComponent }           from './admin.component';
import { FormsModule }              from '@angular/forms';
import { TextMaskModule }           from 'angular2-text-mask';

import { AdminRoutingModule }       from './admin-routing.module';
import { DashboardComponent }       from './dashboard/dashboard.component';
import { MyAccountComponent }       from './my-account/my-account.component';
import { DoctorComponent }          from './doctor/doctor.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    TextMaskModule
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    MyAccountComponent,
    DoctorComponent
  ],
  providers: [
    AdminComponent
  ]
})
export class AdminModule { }
