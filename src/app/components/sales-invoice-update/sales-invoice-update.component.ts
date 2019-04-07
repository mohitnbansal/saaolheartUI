import { FlashMessageService } from './../../services/flash/flash-message.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, DoCheck, Input, IterableDiffers, OnChanges, SimpleChanges } from '@angular/core';
import { SalesService } from 'src/app/services/sales/sales.service';

@Component({
  selector: 'app-sales-invoice-update',
  templateUrl: './sales-invoice-update.component.html',
  styleUrls: ['./sales-invoice-update.component.scss']
})
export class SalesInvoiceUpdateComponent implements OnInit  {
  rows = [];
  rowDb = [];
  selected = [];
  salesInfo: any;
  editingCtAngio = {};
   selectedRows: any[];
  totalAmount:number;
  differ: any;
  constructor(public activate: ActivatedRoute,
    public flash: FlashMessageService,
    public salesService:SalesService) {

    this.salesInfo = this.activate.snapshot.data['dataDetails'].document;
    this.totalAmount = this.salesInfo.invoiceOfPurchase.totalInvoiceAmt;
    this.rows = this.salesInfo.customerPurchasesList;
    
    const rowDblist = JSON.parse(JSON.stringify(this.salesInfo.customerPurchasesList));
    this.rowDb = rowDblist;
  }
  ngOnInit() {

    this.rows.forEach((item) => {
     
      this.editingCtAngio[item.id + '-quantityPurchased'] = false;
      
      });
 
  }
 
  onUserEvent ( e ) {
   
} 


  onSelect({ selected }) {
    // console.log('Select Event', selected, this.selected);
      // console.log(this.editingCtAngio);
      console.log("qweqwekjqwkejhwqj")

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event) {
if(event.type === 'checkbox'){
  this.rows.forEach((item) => {
    this.editingCtAngio[item.id + '-quantityPurchased'] = false;
  });
    this.selected.forEach(element => {
        this.editingCtAngio[element.id + '-quantityPurchased'] = true;
      });

}    // console.log('Activate Event', event);
  }

  add() {
    this.selected.push(this.rows[1], this.rows[3]);
  }

  update() {
    console.log(this.selected);
    console.log(this.rows)
   let isValid =true;
   let arr = [];
    this.rowDb.forEach((v,k)=>{
      console.log(this.rows[k].quantityPurchased);
      console.log(v.quantityPurchased);
if(this.rows[k].quantityPurchased > v.quantityPurchased){
  isValid = false;
  const rowth = k+1;
  arr[k] = 'Kindly Enter Stock less than the ' +  v.quantityPurchased + ' quantity for ' +rowth+ ' row';
}
if(isValid===true){
 this.salesService.updateSales(this.rows).subscribe((res)=>{
console.log(res);
this.remove();
 },(err)=>{
console.log(err)
 });
}else{
  this.flash.show(arr,4000);
}
    });

    // this.selected = [ this.rows[1], this.rows[3] ];

   
  }

  remove() {
    this.selected = [];
  }

  displayCheck(row) {
    return row.name !== 'Ethel Price';
  }
  updateValueQty(event, cell, rowIndex) {
    this.rows[rowIndex][cell] = event.target.value;
  }
}
