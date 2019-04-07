import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-invoice-info',
  templateUrl: './sales-invoice-info.component.html',
  styleUrls: ['./sales-invoice-info.component.scss']
})
export class SalesInvoiceInfoComponent implements OnInit {
salesInfo:any;
  constructor(public activate:ActivatedRoute) {
    this.salesInfo = this.activate.snapshot.data['dataDetails'].document;
  console.log(this.salesInfo);
  }

  ngOnInit() {
  }

}
