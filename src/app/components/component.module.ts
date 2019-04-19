import { CustomerDetailsPage } from './../pages/customer/customer-details/customer-details.page';
import { CustomerRegistrationPageModule } from './../pages/customer/customer-registration/customer-registration.module';
import { OwlDialogModule } from 'ng-pick-datetime/dialog';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { MarkAppointmentPageModule } from './mark-appointment/mark-appointment.module';
import { FormsModule, ReactiveFormsModule, FormGroupDirective, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CtAngiographyDetailsComponent } from './ct-angiography-details/ct-angiography-details.component';
import { TreatmentPlanDetailComponent } from './treatment-plan-detail/treatment-plan-detail.component';
import { FlashMessageComponent } from './flash-message/flash-message.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreatmentInvoiceDetailsComponent } from './treatment-invoice-details/treatment-invoice-details.component';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { DayViewSchedulerComponent } from './day-view-scheduler/day-view-scheduler.component';
import { SearchUpdateScheduleComponent } from './search-update-schedule/search-update-schedule.component';

import { StockDetailsComponent } from './stock-details/stock-details.component';
import { StockUpdateComponent } from './stock-update/stock-update.component';
import { StockUpdateHistoryComponent } from './stock-update-history/stock-update-history.component';
import { StockPurchaseHistroyComponent } from './stock-purchase-histroy/stock-purchase-histroy.component';
import { SalesInvoiceInfoComponent } from './sales-invoice-info/sales-invoice-info.component';
import { SalesInvoiceUpdateComponent } from './sales-invoice-update/sales-invoice-update.component';
import { SalesInvoiceHistoryComponent } from './sales-invoice-history/sales-invoice-history.component';
import { ToolpopComponent } from './toolpop/toolpop.component';

@NgModule({
  declarations: [HeaderComponent,
    CustomerDetailComponent,
     DoctorDetailsComponent,
      CtAngiographyDetailsComponent,
       TreatmentPlanDetailComponent,
       FlashMessageComponent,
       TreatmentInvoiceDetailsComponent,
       InvoiceDetailsComponent,
       DayViewSchedulerComponent,
       SearchUpdateScheduleComponent,
       StockDetailsComponent,
       StockUpdateComponent,
       StockUpdateHistoryComponent,
       StockPurchaseHistroyComponent,
       SalesInvoiceInfoComponent,
       SalesInvoiceUpdateComponent,
       SalesInvoiceHistoryComponent,
      ToolpopComponent],
  imports: [
    CommonModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    OwlDialogModule
  ],
 entryComponents:[ToolpopComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [HeaderComponent,
     CustomerDetailComponent,
      DoctorDetailsComponent,
      CtAngiographyDetailsComponent,
      TreatmentPlanDetailComponent,
      FlashMessageComponent,
      TreatmentInvoiceDetailsComponent,
      InvoiceDetailsComponent,
      DayViewSchedulerComponent,
      SearchUpdateScheduleComponent,
      StockDetailsComponent,
      StockUpdateComponent,
      StockUpdateHistoryComponent,
      StockPurchaseHistroyComponent,
      SalesInvoiceInfoComponent,
      SalesInvoiceUpdateComponent,
      SalesInvoiceHistoryComponent,
      ToolpopComponent
      ],
      providers:[],
    
})
export class ComponentModule { }
