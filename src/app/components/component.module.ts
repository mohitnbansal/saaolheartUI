import { HeaderComponent } from './header/header.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';

@NgModule({
  declarations: [HeaderComponent, CustomerDetailComponent, DoctorDetailsComponent],
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [HeaderComponent, CustomerDetailComponent, DoctorDetailsComponent]
})
export class ComponentModule { }
