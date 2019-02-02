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

@NgModule({
  declarations: [HeaderComponent,
    CustomerDetailComponent,
     DoctorDetailsComponent,
      CtAngiographyDetailsComponent,
       TreatmentPlanDetailComponent,
       FlashMessageComponent,
       TreatmentInvoiceDetailsComponent,
       InvoiceDetailsComponent],
  imports: [
    CommonModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
  ],
 
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [HeaderComponent,
     CustomerDetailComponent,
      DoctorDetailsComponent,
      CtAngiographyDetailsComponent,
      TreatmentPlanDetailComponent,
      FlashMessageComponent,
      TreatmentInvoiceDetailsComponent,
      InvoiceDetailsComponent]
})
export class ComponentModule { }
