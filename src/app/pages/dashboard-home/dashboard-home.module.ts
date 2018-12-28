import { HeaderComponent } from './../../components/header/header.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DashboardHomePage } from './dashboard-home.page';
import { ComponentModule } from 'src/app/components/component.module';


const routes: Routes = [
  {
    path: '',
    component: DashboardHomePage
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
  declarations: [DashboardHomePage]
})
export class DashboardHomePageModule {}
