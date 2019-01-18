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

@NgModule({
  declarations: [HeaderComponent,
    CustomerDetailComponent,
     DoctorDetailsComponent,
      CtAngiographyDetailsComponent,
       TreatmentPlanDetailComponent,
       FlashMessageComponent],
  imports: [
    CommonModule,
    NgxDatatableModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [HeaderComponent,
     CustomerDetailComponent,
      DoctorDetailsComponent,
      CtAngiographyDetailsComponent,
      TreatmentPlanDetailComponent,
      FlashMessageComponent]
})
export class ComponentModule { }
