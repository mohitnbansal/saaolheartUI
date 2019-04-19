import { CustomerSales } from './../../../interfaces/customerSales';
import { FlashMessageService } from './../../../services/flash/flash-message.service';
import { SalesService } from './../../../services/sales/sales.service';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { CustomerService } from './../../../services/customer/customer.service';
import { CustomerPurchases } from './../../../interfaces/customerpurchases';
import { Component, OnInit, Input, ViewChild, ViewChildren } from '@angular/core';
import { IonSearchbar, ModalController } from '@ionic/angular';
import { StockService } from 'src/app/services/stock/stock.service';
import { StockQuantityPage } from 'src/app/components/stock-quantity/stock-quantity.page';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-new-sales',
  templateUrl: './new-sales.page.html',
  styleUrls: ['./new-sales.page.scss'],
})
export class NewSalesPage implements OnInit {
public showHide: boolean = false;
public currentDate: Date = new Date();
public customerString: any;
public customerList: any;
public stockItems: any[];
public stockItemsForRows: any[];
@ViewChild('invTable') invTable: DatatableComponent;
public rows: any[] = [];
selected = [];
public customerDbObj:any = [];
columns: any[];
port: any;
stockName: string;
stockQty: number;
stockId: number;
public totalPriceOfInv: any;

public customerSaleData: CustomerSales = <CustomerSales>{} ;
@ViewChild('productString') productString: IonSearchbar;
  constructor(public customerService: CustomerService,
    public stockService: StockService,
    public salesService: SalesService,
    public flashService: FlashMessageService,
    public modalController: ModalController) {

     }

  ngOnInit() {
  }
  getCustomerListBySearch(event: any) {
    console.log(event.target.value)
    if(event.target.value !== '') {
this.customerService.getCustomerListByNameOrMobile(event.target.value).subscribe((res)=>{
  this.customerList = res;
  
  console.log(res);
},
(err) => {
  delete this.customerList;
 
  console.log(err);
});
} else{
  
  delete this.customerList;
  
}
  }

  getCustomerDetails(ev: any) {
console.log(ev.target.value);
this.customerService.getCustomerById(ev.target.value).subscribe((res) => {
  this.customerDbObj = res;
  this.showHide = true;
console.log(res)
}, (err) => {
console.log(err);
});
console.log(this.customerString)
this.customerString = '';
delete this.customerList;

  }
  getStockBySearch(stck : any){
    console.log(stck.target.value)
this.stockService.getStockByLikeName(stck.target.value).subscribe((res) => {
console.log(res);
this.stockItems = res;
}, (err) => {
console.log(err);
})
  }

  setStockProduct(prdct: any){
    console.log(prdct.target.value);
    const stockSelected = this.stockItems.filter(key =>  (key.id ==  prdct.target.value));
    this.stockItemsForRows = stockSelected;
    console.log( this.stockItemsForRows);
      this.presentModal();
  }


  async presentModal() {
    const modal = await this.modalController.create({
      component: StockQuantityPage,
      cssClass: 'my-custom-modal-css',
      componentProps: { 
        stockName:  this.stockItemsForRows[0].stockName, stockQty :this.stockQty, totalStck: this.stockItemsForRows[0].qtyOfStockAvailable}
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    console.log(data);
    delete this.stockItems ;
    console.log(this.stockItemsForRows);
    this.productString.value = '';
    this.addToRows(data);
  }

  addToRows(dat: any) {
    console.log(23)
    this.stockItemsForRows[0].stockQty = dat.stockQty;
    this.stockItemsForRows[0].price = dat.stockQty * this.stockItemsForRows[0].currentRateOfStock;
  this.rows.push(this.stockItemsForRows[0]);
  console.log(this.rows)
  this.rows = [...this.rows];
  this.calculateTotal();
  }

  deleteThisRow(eve: any, rw: any){
    console.log(eve);
    this.rows.splice(eve,1);
    this.rows = [...this.rows];
    this.calculateTotal();
  }


  calculateTotal(){
    let totalPrice = 0;
    this.rows.forEach((k,v)=>{
      const totalTemp = k.stockQty * k.currentRateOfStock;
      totalPrice = totalPrice + totalTemp;
    });
    this.totalPriceOfInv = totalPrice;
  }
  saveInvoice(action:string){
    this.customerSaleData.customerPurchasesList = [];
    this.rows.forEach((k,v)=>{
      let customerTemp: any = {};
      customerTemp.stockDomainId = k.id;
      customerTemp.quantityPurchased = k.stockQty;
      customerTemp.rateOfStock = k.currentRateOfStock;
      customerTemp.price = k.price ;
      customerTemp.customerId = this.customerDbObj.id;
      customerTemp.totalInvoiceAmt = this.totalPriceOfInv;
      customerTemp.isCancelled = 'NEW';
      this.customerSaleData.customerPurchasesList.push(customerTemp);
    });
    this.customerSaleData.customerId = this.customerDbObj.id; 
    this.customerSaleData.paymentAmount = this.totalPriceOfInv;
    this.customerSaleData.paymentMode = '';
    this.customerSaleData.paymentReferenceNo = '';
    this.customerSaleData.totalInvoiceAmt = this.totalPriceOfInv;
    console.log(this.customerSaleData);
    this.salesService.saveStock(this.customerSaleData).subscribe((res)=>{
      console.log(res);
      this.flashService.showGreen(res.error,4000);
      this.resetForm();
if(action==='print'){
      this.salesService.printSalesRecipt(res.document).subscribe((response)=>{
        console.log(response);
      },(err)=>{
        console.log(err);
      });
    } else if (action === 'mail'){
      this.salesService.emailReciept(res.document).subscribe((response)=>{
        console.log(response);
      },(err)=>{
        console.log(err);
      });
    }

    }, (err) => {
      this.flashService.showRed(err.error,4000);
      console.log(err);
    });
  }
  resetForm(){
    this.showHide = false;
    this.rows = [];

  }
}

