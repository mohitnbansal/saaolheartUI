import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DasboardResolveService implements Resolve<any> {

  constructor(public dashBoard: DashboardService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
    const id = route.paramMap.get('id');
  return  this.dashBoard.getInHouseAppointmentList();
  }
}
