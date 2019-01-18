import { Observable } from 'rxjs';
import { CustomerService } from './customer.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Customer } from 'src/app/interfaces/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailsService implements Resolve<any> {

  constructor(public custService: CustomerService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
    const id = route.paramMap.get('id');
  return  this.custService.getCustomerById(id);
  }
}
  