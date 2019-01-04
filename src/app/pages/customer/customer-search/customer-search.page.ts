import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.page.html',
  styleUrls: ['./customer-search.page.scss'],
})
export class CustomerSearchPage implements OnInit {

 
  @ViewChild('myTable') table: any;
 public rows = [
  {
    'id': 0,
    'name': 'Ramsey Cummings',
    'gender': 'male',
    'age': 52,
    'address': {
        'state': 'South Carolina',
        'city': 'Glendale'
    }
},
{
    'id': 1,
    'name': 'Stefanie Huff',
    'gender': 'female',
    'age': 70,
    'address': {
        'state': 'Arizona',
        'city': 'Beaverdale'
    }
},
{
    'id': 2,
    'name': 'Mabel David',
    'gender': 'female',
    'age': 52,
    'address': {
        'state': 'New Mexico',
        'city': 'Grazierville'
    }
},
{
    'id': 3,
    'name': 'Frank Bradford',
    'gender': 'male',
    'age': 61,
    'address': {
        'state': 'Wisconsin',
        'city': 'Saranap'
    }
},
{
    'id': 4,
    'name': 'Forbes Levine',
    'gender': 'male',
    'age': 34,
    'address': {
        'state': 'Vermont',
        'city': 'Norris'
    }
},
{
    'id': 5,
    'name': 'Santiago Mcclain',
    'gender': 'male',
    'age': 38,
    'address': {
        'state': 'Montana',
        'city': 'Bordelonville'
    }
},
{
    'id': 6,
    'name': 'Merritt Booker',
    'gender': 'male',
    'age': 33,
    'address': {
        'state': 'New Jersey',
        'city': 'Aguila'
    }
},
{
    'id': 7,
    'name': 'Oconnor Wade',
    'gender': 'male',
    'age': 18,
    'address': {
        'state': 'Virginia',
        'city': 'Kenmar'
    }
}
  ];
 

  selected = [];

  columns: any[] = [
    { prop: 'name'} ,
    { name: 'Company' }, 
    { name: 'Gender' }
  ];

  tablestyle = 'bootstrap';
  constructor() {
   }

  onPage(event) {
    // clearTimeout(this.timeout);
    // this.timeout = setTimeout(() => {
    //   console.log('paged!', event);
    // }, 100);
  }
  getHeight(): number {
      return 100;
  };
   getCustomerListBySearch(event){
     
     return null;
   }
  ngOnInit() {
  }
  toggleExpandRow(row) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }


}
