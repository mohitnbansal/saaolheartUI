import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FlashMessageService } from './../../../services/flash/flash-message.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/services/stock/stock.service';
import { Stock } from 'src/app/interfaces/stock';

@Component({
  selector: 'app-new-stock',
  templateUrl: './new-stock.page.html',
  styleUrls: ['./new-stock.page.scss'],
})
export class NewStockPage implements OnInit {
  
  public stockCategories:any;
  public stockform: FormGroup;
  public showHide: boolean;
  customPopOver: any = {
    subHeader: 'Select Item Category'
  }
  constructor(public fb: FormBuilder, 
    public stockservice: StockService,
    public flashProvider: FlashMessageService,
    public jwt: JwtHelperService,
     public route: Router) { }

  ngOnInit() {
    this.stockform = this.createForm({
      id: [],
      stockCategoryid:  [],
      stockCategory:[],
      stockName:[], 
      stockDescription:[],
      qtyOfStockAvailable:[],
      currentRateOfStock:  [],
      curentStockValue:  [],
      addedOn:[],
      lastUpdatedOn:[]
    });
   this.stockservice.getAllStockCategory().subscribe((res)=>{
    this.stockCategories = res;
    },(err)=>{
      console.log(err)
    });
    console.log(this.stockCategories)
  }

  private createForm(model: Stock): FormGroup {
    return this.fb.group(model);
  }
  private updateForm(model: Partial<Stock>): void {
    this.stockform.patchValue(model);
  }

  onSubmit(){
    console.log(this.stockform.value)
    this.stockservice.saveStock(this.stockform.value).subscribe((res) => {

     this.flashProvider.show('Stock Succesfully Added!' , 4000);
     this.stockform.reset();
     if (res.document.vistingFor === 'store') {
      //this.route.navigate(['store/' + res.document.id]);
     } else {
    // this.route.navigate(['stock/details/' + res.document.id]);
     }
    }, (err) => {
      this.flashProvider.show('Unable to Save Stock!' , 4000);
    }) ;

  

  }

}
