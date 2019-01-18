import { Customer } from './../../interfaces/customer';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
customerDetails: any;
custStatusForm: FormGroup;

  constructor(public activate: ActivatedRoute,public fb: FormBuilder) {
    this.customerDetails = this.activate.snapshot.data['data'];
    console.log(this.activate.snapshot.data) ;

    this.custStatusForm =   this.fb.group({
      id: [''],
      statusOfTreatment: ['']
    });
    }
  ngOnInit() {
  }
  private updateForm(model: Partial<Customer>): void {
    this.custStatusForm.patchValue(model);
  }
}
