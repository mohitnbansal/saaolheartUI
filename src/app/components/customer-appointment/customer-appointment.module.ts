import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { CustomerAppointmentPage } from './customer-appointment.page';
import { OwlDateTimeModule, OwlNativeDateTimeModule  } from 'ng-pick-datetime';
import { OwlDialogModule } from 'ng-pick-datetime/dialog';


const routes: Routes = [
  {
    path: '',
    component: CustomerAppointmentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    OwlDialogModule,
    
    RouterModule.forChild(routes)
  ],
  
  declarations: [CustomerAppointmentPage]
})
export class CustomerAppointmentPageModule {}
