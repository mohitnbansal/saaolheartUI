import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ComponentModule } from 'src/app/components/component.module';

import { CustomerDetailsPage } from './customer-details.page';


const routes: Routes = [
  {
    path: '',
    component: CustomerDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CustomerDetailsPage]
})
export class CustomerDetailsPageModule {}
