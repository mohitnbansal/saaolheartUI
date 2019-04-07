import { ComponentModule } from './../../../components/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalesDetailsPage } from './sales-details.page';

const routes: Routes = [
  {
    path: '',
    component: SalesDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalesDetailsPage]
})
export class SalesDetailsPageModule {}
