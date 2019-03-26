import { JwtHelperService } from '@auth0/angular-jwt';
import { CustomerService } from './../../../services/customer/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../interfaces/customer';
import { FlashMessageService } from 'src/app/services/flash/flash-message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.page.html',
  styleUrls: ['./customer-registration.page.scss'],
})
export class CustomerRegistrationPage implements OnInit {

  public custformGroup: FormGroup;
  public showHide: boolean;
  customPopover: any = {
    subHeader: 'Select Customer Type'
  };
  constructor(public fb: FormBuilder, public customerService: CustomerService,
    public flashProvider: FlashMessageService,
    public jwt: JwtHelperService, public route: Router) { }

  ngOnInit() {
    
    this.custformGroup = this.createForm({
      firstName: ['', Validators.required],
      lastName: [''],
      middleName: [''],
      address: [''],
      emailId: [''],
      gender: [''],
      martialStatus: [''],
      dob: [],
      age: [],
      mobileNo: [],
      altMobileNo: [],
      vistingFor: [''],
      aadharNumber: [],
      occupation: [],
      landlineOff: [],
       landlineRes: [],
       panNumber: []
    });

    this.changeEvent();
    this.showHide = true;
  }
  onSubmit() {
console.log(this.custformGroup.value)
    this.customerService.saveCustomer(this.custformGroup.value).subscribe((res) => {

     this.flashProvider.show('Customer Succesfully Added!' , 4000);
     this.custformGroup.reset();
     if (res.document.vistingFor === 'store') {
      //this.route.navigate(['store/' + res.document.id]);
     } else {
     this.route.navigate(['customer/details/' + res.document.id]);
     }
    }, (err) => {
      console.log(err.error.error);
      this.flashProvider.show(err.error.error , 4000);
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

/**
 * Below is the change event to capture the change in customer type and set the boolean value
 */

 this.custformGroup.get('vistingFor').valueChanges.subscribe(val => {

    if (val === 'store') {
          this.showHide = false;
    } else {
          this.showHide = true;
    }

   });
  }
}
