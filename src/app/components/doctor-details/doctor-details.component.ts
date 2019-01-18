import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss']
})
export class DoctorDetailsComponent implements OnInit {

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

  constructor() {}


  ngOnInit() {
  }

  updateValue(event, cell, rowIndex) {
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
  }


}
