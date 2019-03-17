import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Stock } from 'src/app/interfaces/stock';
import { StockService } from 'src/app/services/stock/stock.service';

@Component({
  selector: 'app-update-stock-items',
  templateUrl: './update-stock-items.page.html',
  styleUrls: ['./update-stock-items.page.scss'],
})
export class UpdateStockItemsPage implements OnInit {
public stockList : Stock[];
public rows : Stock[];
@ViewChild('myTable') table: DatatableComponent;
selected = [];

  columns: any[];

  tablestyle = 'bootstrap';
  constructor( public stockservice: StockService) { }
  onPage(event) {
    // clearTimeout(this.timeout);
    // this.timeout = setTimeout(() => {
    //   console.log('paged!', event);
    // }, 100);
  }
  getHeight(): number {
      return 150;
  };
   getCustomerListBySearch(event:any){

const val = event.target.value.toLowerCase();
  // get the amount of columns in the table
  const colsAmt = this.columns.length;
  // get the key names of each column in the dataset
  const keys = Object.keys(this.stockList[0]);
  // assign filtered matches to the active datatable
  this.rows = this.stockList.filter(function(item){
    // iterate through each row's column data
    for (let i = 0; i < colsAmt; i++) {
      // check for a match
      if(item[keys[i]] !=  null) {
      if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 || !val){
        // found match, return true to add to result set
        return true;
      }
      }
    }
  });
};
  ngOnInit() {
    this.stockservice.getAllStockByOrder().subscribe((res) => {
      console.log(res)
      this.stockList = res;
      this.rows = res;
      this.columns = Object.keys(res[0]).map((key) => {
         return {
           'prop': key
         };
       });
           }, (err) => {
     console.log(err);
           });
  }
  toggleExpandRow(row,expanded) {
   
    if(expanded !== true)
    {this.table.rowDetail.collapseAllRows();
    }
        this.table.rowDetail.toggleExpandRow(row);
      }
    
    
}
