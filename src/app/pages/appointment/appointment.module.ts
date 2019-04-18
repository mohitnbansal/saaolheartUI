import { OwlDialogModule } from 'ng-pick-datetime/dialog';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ComponentModule } from './../../components/component.module';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppointmentPage } from './appointment.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    NgxDatatableModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    OwlDialogModule,
  
    RouterModule.forChild(routes)
  ],
  providers:[DatePipe],
  declarations: [AppointmentPage]
})
export class AppointmentPageModule {}
