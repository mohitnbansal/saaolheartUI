import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SalesService } from './sales.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalesDetailsResolveService implements Resolve<any> {

  constructor(public salesService: SalesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
    const id = route.paramMap.get('id');
  return  this.salesService.getSalesDetailById(Number(id));
  }
}
