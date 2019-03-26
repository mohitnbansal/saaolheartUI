import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker';
import { CustomerAppointmentPage } from './customer-appointment.page';

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
    RouterModule.forChild(routes)
  ],
  
  declarations: [CustomerAppointmentPage]
})
export class CustomerAppointmentPageModule {}
