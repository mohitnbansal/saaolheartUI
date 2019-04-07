import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

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
  constructor(public activate:ActivatedRoute) { 

    this.salesList = this.activate.snapshot.data['dataList'];

    this.temp = [...this.salesList.document];

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
