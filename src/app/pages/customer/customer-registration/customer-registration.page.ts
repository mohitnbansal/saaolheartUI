import { CustomerService } from './../../../services/customer/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../interfaces/customer';

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
  constructor(public fb: FormBuilder,public customerService: CustomerService) { }

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
      mobileNo: [],
      altMobileNo: [],
      vistingFor: [''],
      aadharNumber: [],
      occupation: [],
      landlineOff: [''],
       landlineRes: ['']
    });
  }
  onSubmit() {
    console.log(this.custformGroup.value);
    this.customerService.saveCustomer(this.custformGroup.value).subscribe((res) => {
     console.log(res);
    }, (err) => {
      console.log(err);
    }) ;

  }
  private createForm(model: Customer): FormGroup {
    return this.fb.group(model);
  }
  private updateForm(model: Partial<Customer>): void {
    this.custformGroup.patchValue(model);
  }

 
  
  

}
