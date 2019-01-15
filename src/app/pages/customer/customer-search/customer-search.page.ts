import { CustomerService } from './../../../services/customer/customer.service';
import { Customer } from './../../../interfaces/customer';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.page.html',
  styleUrls: ['./customer-search.page.scss'],
})
export class CustomerSearchPage implements OnInit {

public customerList: Customer[];

  @ViewChild('myTable') table: any;
 public rows: Customer[];
  selected = [];

  columns: any[];

  tablestyle = 'bootstrap';
  constructor(public custService: CustomerService) {
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

let val = event.target.value.toLowerCase();
  // get the amount of columns in the table
  let colsAmt = this.columns.length;
  // get the key names of each column in the dataset
  let keys = Object.keys(this.customerList[0]);
  // assign filtered matches to the active datatable
  this.rows = this.customerList.filter(function(item){
    // iterate through each row's column data
    for (let i=0; i<colsAmt; i++){
      // check for a match
      if(item[keys[i]]!=null){
      if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 || !val){
        // found match, return true to add to result set
        return true;
      }
      }
    }
  });
};
     
   
  ngOnInit() {
      this.custService.getAllCustomerSortedList().subscribe((res) => {
 console.log(res)
 this.customerList = res;
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
  toggleExpandRow(row) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }


}
