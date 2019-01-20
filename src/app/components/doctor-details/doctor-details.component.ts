import { FlashMessageService } from './../../services/flash/flash-message.service';
import { CustomerService } from './../../services/customer/customer.service';
import { DoctorConsultation } from './../../interfaces/doctorconsultaion';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnChanges, DoCheck, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss']
})
export class DoctorDetailsComponent implements OnInit {
  doctorDetailsForm: FormGroup;

  doctorDetailfromDb: any;
  editing = {};
  rows = [
    {
        'type': 'Doctor Consultation',
        'paymentMode': 'Cheque',
        'bankName': 'Johnson, Johnson and Partners, LLC CMP DDC',
        'details': '22',
        'amount': 0.00,
        'dateAndTime': new Date()
    }]
;
constructor(public activate: ActivatedRoute, public fb: FormBuilder,
  public customerService: CustomerService,
  public flashProvider: FlashMessageService) {
  this.doctorDetailfromDb = this.activate.snapshot.data['data'];

}


  ngOnInit() {
    if (this.doctorDetailfromDb.doctorConsultationList.length > 0) {
      this.doctorDetailsForm = this.createForm({
        id: [],
        consulatationDate:  [this.doctorDetailfromDb.consulatationDate],
        consultationBy: [this.doctorDetailfromDb.consultationBy],
        daignosisSummary: [this.doctorDetailfromDb.daignosisSummary],
        testSuggested: [this.doctorDetailfromDb.testSuggested],
        typeOfTreatement:  [this.doctorDetailfromDb.typeOfTreatement],
        invoice:  [this.doctorDetailfromDb.invoice],
        customerId: [this.doctorDetailfromDb.id],
        invoiceTotalamt: [, Validators.required]
      });
        } else {
          this.doctorDetailsForm = this.createForm({
            id: [],
            consulatationDate:  [],
            consultationBy: [''],
            daignosisSummary: [''],
            testSuggested: [''],
            typeOfTreatement:  [''],
            invoice:  [],
            customerId: [this.doctorDetailfromDb.id],
            invoiceTotalamt: [, Validators.required]
          });
        }

  }
  onSubmit() {
    console.log(this.doctorDetailsForm.value);
    this.customerService.saveDoctorDetails(this.doctorDetailsForm.value).subscribe((res) => {
      this.flashProvider.show('Doctor Details Succesfully Added!' , 4000);
     }, (err) => {
       this.flashProvider.show('Unable to update doctor details!' , 4000);
     }) ;
  }
  updateValue(event, cell, rowIndex) {
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
  }

  private updateForm(model: Partial<DoctorConsultation>): void {
    this.doctorDetailsForm.patchValue(model);
  }
  private createForm(model: DoctorConsultation): FormGroup {
    return this.fb.group(model);
  }

 
}
