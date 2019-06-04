import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SalesService } from 'src/app/services/sales/sales.service';

@Component({
  selector: 'app-search-sales',
  templateUrl: './search-sales.page.html',
  styleUrls: ['./search-sales.page.scss'],
})
export class SearchSalesPage implements OnInit {
salesList:any;
rows=[];
columns=[];
temp = [];
@ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(public activate:ActivatedRoute,
    private router:Router,
    public salesService: SalesService) { 

    this.salesList = this.activate.snapshot.data['dataList'];
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.salesList =   this.salesService.getAllSalesList();
      }
  });
if(this.salesList.document !== null) {
    this.temp = [...this.salesList.document];
}
      // push our inital complete list
      this.rows = this.salesList.document;
      
  }


  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.customerName.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
  ngOnInit() {
  }

}
