import { Stock } from 'src/app/interfaces/stock';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { StockService } from 'src/app/services/stock/stock.service';
import { FlashMessageService } from 'src/app/services/flash/flash-message.service';

@Component({
  selector: 'app-stock-update',
  templateUrl: './stock-update.component.html',
  styleUrls: ['./stock-update.component.scss']
})
export class StockUpdateComponent implements OnInit {
  public stockDetailsDb: any;
  public purchaseForStock: any;
public stockView:Stock = <Stock>{};
    constructor(public activate:ActivatedRoute,
      public stockService: StockService,
      public flashservice:FlashMessageService) {
      this.stockDetailsDb = this.activate.snapshot.data['data'];
      this.purchaseForStock = this.activate.snapshot.data['stockSales'];
      console.log(this.stockDetailsDb);
      console.log(this.purchaseForStock);
      this.stockView.currentRateOfStock =  this.stockDetailsDb.currentRateOfStock;
     }
  
  ngOnInit() {
  }

  setQuantity(prop,value) {
    this.stockView[prop] = value;
  
  }
  updateStock(){
  
   this.stockView.id=  this.stockDetailsDb.id;
  
   console.log(this.stockView)
this.stockService.updateStock(this.stockView).subscribe((res)=>{
this.flashservice.showGreen(res.error,5000)}
,
(err) => {
  this.flashservice.showRed(err.error.error, 5000);
});
  }
}
