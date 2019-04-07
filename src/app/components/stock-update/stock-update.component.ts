import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-update',
  templateUrl: './stock-update.component.html',
  styleUrls: ['./stock-update.component.scss']
})
export class StockUpdateComponent implements OnInit {
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
