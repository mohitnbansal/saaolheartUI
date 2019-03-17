import { ComponentModule } from 'src/app/components/component.module';
import { IonicSelectableModule } from 'ionic-selectable';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewSalesPage } from './new-sales.page';
import { StockQuantityPageModule } from 'src/app/components/stock-quantity/stock-quantity.module';

const routes: Routes = [
  {
    path: '',
    component: NewSalesPage
  }
];

@NgModule({
  entryComponents: [],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxDatatableModule,
    ComponentModule,
    RouterModule.forChild(routes),
    IonicSelectableModule

  ],
  declarations: [NewSalesPage]
})
export class NewSalesPageModule {}
