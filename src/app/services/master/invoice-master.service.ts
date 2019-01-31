import { MasterService } from './master.service';
import { Observable } from 'rxjs';
import { CustomerService } from './../customer/customer.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InvoiceMasterService implements Resolve<any>{
  
  constructor(public custService: CustomerService,
    public masterservice: MasterService) { }

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
return  this.masterservice.getAllInvoiceMasterTypes();
}
}
