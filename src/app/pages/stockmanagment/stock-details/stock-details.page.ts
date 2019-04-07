import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-details-main',
  templateUrl: './stock-details.page.html',
  styleUrls: ['./stock-details.page.scss'],
})
export class StockDetailsPage implements OnInit {
  customercomp = '';
  stockDetailsDb : any;
  constructor(public activate:ActivatedRoute) { 
    this.customercomp = 'stockDetails';
    this.stockDetailsDb = this.activate.snapshot.data['data'];
  }

  ngOnInit() {
  }

}
