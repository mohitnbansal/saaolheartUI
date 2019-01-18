import { JwtHelperService } from '@auth0/angular-jwt';
import { CustomerService } from './../../../services/customer/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../interfaces/customer';
import { FlashMessageService } from 'src/app/services/flash/flash-message.service';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.page.html',
  styleUrls: ['./customer-registration.page.scss'],
})
export class CustomerRegistrationPage implements OnInit {

  public custformGroup: FormGroup;
  customPopover: any = {
    heade: 'Customer Type',
    subHeader: 'Select Customer Type',
    message: 'No if he/she is a Pateint'
  }
  constructor(public fb: FormBuilder, public customerService: CustomerService,
    public flashProvider: FlashMessageService,
    public jwt: JwtHelperService) { }

  ngOnInit() {
    const tok = this.jwt.decodeToken(this.jwt.tokenGetter());
    console.log(tok)
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
      landlineOff: [''],
       landlineRes: ['']
    });

    this.updateDate();
  }
  onSubmit() {

    console.log(this.custformGroup.value);
    this.customerService.saveCustomer(this.custformGroup.value).subscribe((res) => {

     console.log(res);
     this.flashProvider.show('Customer Succesfully Added!' , 4000);
     this.custformGroup.reset();
    }, (err) => {
      console.log(err);
      this.flashProvider.show('Unable to Save Customer!' , 4000);
    }) ;

  }
  private createForm(model: Customer): FormGroup {
    return this.fb.group(model);
  }
  private updateForm(model: Partial<Customer>): void {
    this.custformGroup.patchValue(model);
  }
 
  updateDate() {
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
  }
}
