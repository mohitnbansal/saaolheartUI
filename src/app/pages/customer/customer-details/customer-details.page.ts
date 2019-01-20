import { DoctorDetailsComponent } from './../../../components/doctor-details/doctor-details.component';
import { DoctorConsultation } from './../../../interfaces/doctorconsultaion';
import { FlashMessageService } from './../../../services/flash/flash-message.service';
import { CustomerService } from './../../../services/customer/customer.service';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, ViewChildren, AfterViewInit, Input } from '@angular/core';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.page.html',
  styleUrls: ['./customer-details.page.scss'],
  providers: [FormsModule, ReactiveFormsModule]
})

export class CustomerDetailsPage implements OnInit, AfterViewInit{
  customercomp = '';

constructor(public activate: ActivatedRoute, public fb: FormBuilder,
  public customerService: CustomerService,
  public flashProvider: FlashMessageService) {

}


  ngOnInit() {

  }
  ngAfterViewInit() {
   // console.log(this.doctorDetail.initializeForm());
 
  }
  onSegmentChange(eve: any) {
   console.log(eve.detail.value);

   if (eve.detail.value === 'doctordetails') {
     console.log(454);
 // this.doctorDetail.initializeForm();
   }
  }
 
}
