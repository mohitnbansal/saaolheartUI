import { PipesModule } from './../../../pipes/pipes.module';
import { AadharTranformPipe } from './../../../pipes/aadhar/aadhar-tranform.pipe';
import { OwlDialogModule } from 'ng-pick-datetime/dialog';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CustomerRegistrationPage } from './customer-registration.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerRegistrationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    OwlDialogModule,
    RouterModule.forChild(routes),
    PipesModule
  ],
  declarations: [CustomerRegistrationPage],
  exports:[CustomerRegistrationPage],
  providers:[DatePipe]
})
export class CustomerRegistrationPageModule {}
