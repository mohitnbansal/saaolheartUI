import { InvoiceRoutingModule } from './invoice-routing.module';
import { ComponentModule } from './../../components/component.module';
import { CustomerRoutingModule } from './../customer/customer-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InvoicesPage } from './invoices.page';
import { SalesService } from 'src/app/services/sales/sales.service';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    InvoiceRoutingModule,
    NgxDatatableModule
  ],
  providers: [SalesService],
  declarations: [InvoicesPage]
})
export class InvoicesPageModule {}
