import { JwtHelperService } from '@auth0/angular-jwt';
import { CustomerService } from './../../../services/customer/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, OnChanges, AfterViewInit } from '@angular/core';
import { Customer } from '../../../interfaces/customer';
import { FlashMessageService } from 'src/app/services/flash/flash-message.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MOMENT } from 'angular-calendar';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.page.html',
  styleUrls: ['./customer-registration.page.scss'],
})
export class CustomerRegistrationPage implements OnInit, OnChanges , AfterViewInit{

  public custformGroup: FormGroup;
  public showHide: boolean;
  public customerDetails:any;
  public dob: Date = new Date();
  public altMobNumer:number;
  public age:number;
  customPopover: any = {
    subHeader: 'Select Customer Type'
  };
  constructor(public fb: FormBuilder, public customerService: CustomerService,
    public flashProvider: FlashMessageService,
    public jwt: JwtHelperService, public route: Router,public activate:ActivatedRoute,
    public datePipe:DatePipe) {
      this.customerDetails = this.activate.snapshot.data['data'] != null ? this.activate.snapshot.data['data'] :          <Customer>{}  ;
      this.altMobNumer  = this.customerDetails.altMobileNo != null ? Number(this.customerDetails.altMobileNo) : null;
      this.age = this.customerDetails.age != null ? this.customerDetails.age : null;
      console.log(this.customerDetails);
      this.buildForm(this.age, this.altMobNumer);
      if (this.customerDetails != null && this.customerDetails.vistingFor != null && this.customerDetails.vistingFor === 'store'){
        this.removeControlsForStore();
        }
    }

  private buildForm(age: any, altMobNumer: number) {
    this.custformGroup = this.createForm({
      id: [this.customerDetails != null ? this.customerDetails.id : null],
      firstName: [this.customerDetails.firstName != null ? this.customerDetails.firstName : '', Validators.required],
      lastName: [this.customerDetails.lastName != null ? this.customerDetails.lastName : '', Validators.required],
      middleName: [this.customerDetails.middleName != null ? this.customerDetails.middleName : ''],
      address: [this.customerDetails.address != null ? this.customerDetails.address : '', Validators.required],
      emailId: [this.customerDetails.emailId != null ? this.customerDetails.emailId : '',
      Validators.compose([Validators.required, Validators.email])],
      gender: [this.customerDetails.gender != null ? this.customerDetails.gender : '',
      Validators.compose([Validators.required])],
      martialStatus: [this.customerDetails.martialStatus != null ? this.customerDetails.martialStatus : ''],
      dob: [null, Validators.compose([Validators.required])],
      age: [age, Validators.compose([Validators.required, Validators.minLength(2)])],
      mobileNo: [this.customerDetails.mobileNo != null ? this.customerDetails.mobileNo : null,
      Validators.compose([Validators.required, Validators.minLength(10)])],
      altMobileNo: [altMobNumer, Validators.compose([Validators.minLength(10)])],
      vistingFor: [this.customerDetails != null ? this.customerDetails.vistingFor : '',
      Validators.compose([Validators.required])],
      aadharNumber: [this.customerDetails.aadharNumber != null ? this.customerDetails.aadharNumber : null,
      Validators.compose([Validators.required, Validators.minLength(14)])],
      occupation: [this.customerDetails.occupation != null ? this.customerDetails.occupation : null],
      panNumber: [this.customerDetails.panNumber != null ? this.customerDetails.panNumber : null,
      Validators.compose([Validators.required, Validators.minLength(10), Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')])]
    });
    this.changeEvent();
  }

  ngOnInit() {
  if (this.customerDetails != null && this.customerDetails.vistingFor === 'store') {
    this.showHide = false;
} else {
    this.showHide = true;
}
this.buildForm(this.age, this.altMobNumer);
      if (this.customerDetails != null && this.customerDetails.vistingFor != null && this.customerDetails.vistingFor === 'store'){
        this.removeControlsForStore();
        }
}
  ngAfterViewInit(){
    console.log(this.customerDetails.dob)
    if(this.customerDetails != null && this.customerDetails.dob !=null)
    {    const birthYear =  Number(this.datePipe.transform(this.customerDetails.dob, 'yyyy'));
        const birthMonth =  Number(this.datePipe.transform(this.customerDetails.dob, 'MM'));
        const birthDay =  Number(this.datePipe.transform(this.customerDetails.dob, 'dd'));
        this.dob = new Date(birthYear, birthMonth -1 , birthDay);
      }
  }
  onSubmit() {
console.log(this.custformGroup)
    this.customerService.saveCustomer(this.custformGroup.value).subscribe((res) => {
console.log(res.error)
      this.flashProvider.showGreen(res.error , 4000);
     this.custformGroup.reset();
     if (res.document.vistingFor === 'store') {
      this.route.navigate(['sales/newsales']);
     } else {
     this.route.navigate(['customer/details/' + res.document.id]);
     }
    }, (err) => {
      this.flashProvider.showRed(err.error , 4000);
    }) ;

  }
  private createForm(model: Customer): FormGroup {
    return this.fb.group(model);
  }
  private updateForm(model: Partial<Customer>): void {
    this.custformGroup.patchValue(model);
  }
 
  changeEvent() {
    /**
     * Below is the event to capture changes in date and covert it into age.
     */
this.custformGroup.get('dob').valueChanges.subscribe(val => {
 const today = new Date();
 const selectedDate = new Date(Date.parse(val));
 const diffMillisec = (today.getTime() - selectedDate.getTime());
 const theDays = Math.round(diffMillisec / (1000 * 60 * 60 * 24));
 let theAge ;
 if (theDays >= 365) {
  theAge = Math.round(theDays / 365);
 } else {
   theAge = 0;
 }
 this.custformGroup.get('age').setValue(theAge);
});
console.log(this.custformGroup);
/**
 * Below is the change event to capture the change in customer type and set the boolean value
 */

 this.custformGroup.get('vistingFor').valueChanges.subscribe(val => {
console.log(val)
    if (val === 'store') {
          this.removeControlsForStore();
    } else {
this.customerDetails.vistingFor = 'treatment';
      
          this.showHide = true;
          this.buildForm(this.age, this.altMobNumer);
    }

   });


  
  }
  private removeControlsForStore() {
    this.showHide = false;
    this.custformGroup.removeControl('address');
    this.custformGroup.removeControl('gender');
    this.custformGroup.removeControl('martialStatus');
    this.custformGroup.removeControl('dob');
    this.custformGroup.removeControl('age');
    this.custformGroup.removeControl('aadharNumber');
    this.custformGroup.removeControl('panNumber');
    if (this.customerDetails != null && this.customerDetails.vistingFor != null) {
      this.customerDetails.vistingFor = 'store';
    }
  }

 ngOnChanges(){
   console.log(this.custformGroup)
 }
}
 