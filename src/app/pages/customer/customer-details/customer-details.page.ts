import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.page.html',
  styleUrls: ['./customer-details.page.scss'],
})
export class CustomerDetailsPage implements OnInit {
  customercomp = '';

  constructor(public activate: ActivatedRoute) {
   console.log(this.activate.snapshot.data) ;
   }

  ngOnInit() {
    this.customercomp = 'customerdetails';
  }

}
