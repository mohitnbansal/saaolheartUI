import { SalesRoutingModule } from './sales-routing.module';
import { ComponentModule } from './../../components/component.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalesPage } from './sales.page';
import {IonicSelectableModule } from 'ionic-selectable';
import { StockQuantityPageModule } from 'src/app/components/stock-quantity/stock-quantity.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    SalesRoutingModule,
    NgxDatatableModule,
    IonicSelectableModule,
    StockQuantityPageModule
  ],
  declarations: [SalesPage]
})
export class SalesPageModule {}
