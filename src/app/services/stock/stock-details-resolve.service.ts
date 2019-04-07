import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { StockService } from './stock.service';

@Injectable({
  providedIn: 'root'
})
export class StockDetailsResolveService implements Resolve<any> {

  constructor(public stockService: StockService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
    const id = route.paramMap.get('id');
  return  this.stockService.getStockbyId(id);
  }
}
