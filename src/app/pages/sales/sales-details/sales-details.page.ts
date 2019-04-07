import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-details',
  templateUrl: './sales-details.page.html',
  styleUrls: ['./sales-details.page.scss'],
})
export class SalesDetailsPage implements OnInit {
  customercomp = '';
  salesInfoDetails:any;
  constructor(public activate:ActivatedRoute) { 
    this.salesInfoDetails = this.activate.snapshot.data['dataDetails'].document;
console.log(this.salesInfoDetails);
    this.customercomp = 'salesInfo';
  }

  ngOnInit() {
  }

}
