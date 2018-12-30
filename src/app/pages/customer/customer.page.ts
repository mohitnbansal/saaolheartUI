import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {
  isLoggedIn = true;
 public rows = [
    {
      'name': 'Ethel Price',
      'gender': 'female',
      'age': 22
    },
    {
      'name': 'Claudine Neal',
      'gender': 'female',
      'age': 55
    },
    {
      'name': 'Beryl Rice',
      'gender': 'female',
      'age': 67
    },
    {
      'name': 'Simon Grimm',
      'gender': 'male',
      'age': 28
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
    this.isLoggedIn = true;
   }
   getCustomerListBySearch(event){
     
     return null;
   }
  ngOnInit() {
  }

}
