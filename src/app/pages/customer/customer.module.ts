import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ComponentModule } from 'src/app/components/component.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CustomerPage } from './customer.page';
import {CustomerRoutingModule} from './customer-routing.module';
@NgModule({
  entryComponents: [],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    CustomerRoutingModule,
    NgxDatatableModule
  ],
  declarations: [CustomerPage]
})
export class CustomerPageModule {}
