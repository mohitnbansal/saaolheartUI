import { Observable } from 'rxjs';
import { CustomerService } from './customer.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerListResolveService implements Resolve<any> {

  constructor(public custService: CustomerService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
  return  this.custService.getAllCustomerSortedList();
  }
}
