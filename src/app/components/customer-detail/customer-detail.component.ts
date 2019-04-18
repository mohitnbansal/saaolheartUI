import { CustomerRegistrationPage } from './../../pages/customer/customer-registration/customer-registration.page';
import { ModalController } from '@ionic/angular';
import { Customer } from './../../interfaces/customer';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
customerDetails: any;
custStatusForm: FormGroup;
@Output() navigateTo:EventEmitter<any> = new EventEmitter<any>();
  constructor(public activate: ActivatedRoute, public fb: FormBuilder
    , public modalController: ModalController) {
    this.customerDetails = this.activate.snapshot.data['data'];
    console.log(this.activate.snapshot.data) ;
    this.custStatusForm = this.fb.group({
      id: [''],
      statusOfTreatment: ['']
    });
  }
  ngOnInit() {
  }
  private updateForm(model: Partial<Customer>): void {
    this.custStatusForm.patchValue(model);
  }

  navigateToRegistration(res){
this.navigateTo.emit(res);
  }
}
