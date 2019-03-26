import { HeaderComponent } from './../../components/header/header.component';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DashboardHomePage } from './dashboard-home.page';
import { ComponentModule } from 'src/app/components/component.module';
import { CalendarModule } from 'angular-calendar';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';


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
    CalendarModule,
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [DashboardHomePage],
  providers:[DashboardService]
})
export class DashboardHomePageModule {}
