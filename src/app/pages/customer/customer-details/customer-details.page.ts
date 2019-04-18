import { CustomerDetailComponent } from './../../../components/customer-detail/customer-detail.component';
import { CustomerRegistrationPage } from './../customer-registration/customer-registration.page';
import { ModalController } from '@ionic/angular';
import { DoctorDetailsComponent } from './../../../components/doctor-details/doctor-details.component';
import { DoctorConsultation } from './../../../interfaces/doctorconsultaion';
import { FlashMessageService } from './../../../services/flash/flash-message.service';
import { CustomerService } from './../../../services/customer/customer.service';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild, ViewChildren, AfterViewInit, Input } from '@angular/core';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.page.html',
  styleUrls: ['./customer-details.page.scss'],
  providers: [FormsModule, ReactiveFormsModule]
})

export class CustomerDetailsPage implements OnInit, AfterViewInit{
  customercomp = '';
  customerFormDetails: any;
  public customerDetails: any;
  @ViewChildren(CustomerDetailComponent) customerDetailsComp: CustomerDetailComponent;
  constructor(public activate: ActivatedRoute, public fb: FormBuilder,
  public customerService: CustomerService,
  public flashProvider: FlashMessageService,
  public active: ActivatedRoute,
  public route:Router) 
  {
    this.customerDetails = this.activate.snapshot.data['data'];
  }


  ngOnInit() {
    this.customercomp = 'customerdetails';
    this.customerFormDetails = this.activate.snapshot.data['data'];
  }
  ngAfterViewInit() {
   // console.log(this.doctorDetail.initializeForm());
this.customerDetailsComp['first'].navigateTo.subscribe((res)=>{
this.route.navigateByUrl('/customer/register/' + res);
});
  }
  onSegmentChange(eve: any) {
   console.log(eve.detail.value);

   if (eve.detail.value === 'doctordetails') {
     console.log(454);
 // this.doctorDetail.initializeForm();
   }
  }
}
