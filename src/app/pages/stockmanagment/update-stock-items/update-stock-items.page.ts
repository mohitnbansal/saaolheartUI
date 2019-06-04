import { Router, NavigationEnd } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
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
  constructor( public stockservice: StockService,
    private router: Router) {
      router.events.subscribe((val) => {
        if (val instanceof NavigationEnd) {
          this.getAllStockList();
        }
    });
  }
  
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
    this.getAllStockList();
  }
  private getAllStockList() {
    this.stockservice.getAllStockByOrder().subscribe((res) => {
      console.log(res);
      this.stockList = res;
      this.rows = res;
      if (res !== null && res.length > 0) {
        this.columns = Object.keys(res[0]).map((key) => {
          return {
            'prop': key
          };
        });
      }
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
