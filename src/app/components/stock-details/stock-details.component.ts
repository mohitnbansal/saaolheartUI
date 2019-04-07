import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.scss']
})
export class StockDetailsComponent implements OnInit {
public stockDetailsDb: any;
public purchaseForStock: any;

  constructor(public activate:ActivatedRoute) {
    this.stockDetailsDb = this.activate.snapshot.data['data'];
    this.purchaseForStock = this.activate.snapshot.data['stockSales'];
    console.log(this.stockDetailsDb);
    console.log(this.purchaseForStock);
   }

  ngOnInit() {
  }

}
