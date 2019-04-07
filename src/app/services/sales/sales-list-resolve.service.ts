import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SalesService } from './sales.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalesListResolveService implements Resolve<any> {

  constructor(public salesService: SalesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
    
  return  this.salesService.getAllSalesList();
  }
}
