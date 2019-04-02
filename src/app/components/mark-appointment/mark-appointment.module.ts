import { OwlDialogModule } from 'ng-pick-datetime/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MarkAppointmentPage } from './mark-appointment.page';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

const routes: Routes = [
  {
    path: '',
    component: MarkAppointmentPage
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
  declarations: [MarkAppointmentPage]
})
export class MarkAppointmentPageModule {}
