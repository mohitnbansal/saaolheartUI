import { StockService } from 'src/app/services/stock/stock.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ComponentModule } from './../../components/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StorePage } from './store.page';
import { StoreRoutingModule } from './store-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    StoreRoutingModule,
    NgxDatatableModule
  ],
  declarations: [StorePage]
})
export class StorePageModule {}
