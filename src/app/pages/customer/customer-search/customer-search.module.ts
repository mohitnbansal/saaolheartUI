import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CustomerSearchPage } from './customer-search.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerSearchPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule ,
    NgxDatatableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CustomerSearchPage]
})
export class CustomerSearchPageModule {}
