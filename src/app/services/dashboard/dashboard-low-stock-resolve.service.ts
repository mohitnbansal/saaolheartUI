import { Observable } from 'rxjs';
import { DashboardService } from './dashboard.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardLowStockResolveService implements Resolve<any> {

  constructor(public dashBoard: DashboardService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
  return  this.dashBoard.getLowStockList();
  }
}
