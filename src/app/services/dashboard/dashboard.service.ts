import { Appointment } from './../../interfaces/appointment';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CalendarDateFormatter } from 'angular-calendar';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  public  isMenuOpen = new BehaviorSubject<boolean>(true);
  navItem$ = this.isMenuOpen.asObservable();
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  isOpen = false;

  @Output() change: EventEmitter<any> = new EventEmitter();

  @Output() callModalEvent = new EventEmitter();


  constructor(public http: HttpClient) {
     
     }


  addAppointment(cust: Appointment): Observable<any> {
    return this.http.post<Appointment>(environment.apiUrl + 'dashboard/scheduleappointment', cust, this.httpOptions);
  }

  getPateintsQueueList(): Observable<any> {
    return this.http.get(environment.apiUrl + 'dashboard/getpateintqueuelist', this.httpOptions);

  }

  updateTreatmentSchedule(res: any): Observable<any> {
    return this.http.post<Appointment>(environment.apiUrl + 'dashboard/updateandcompleteschedule', res, this.httpOptions);

  }
  getInHouseAppointmentList(): Observable<any> {
    return this.http.get(environment.apiUrl + 'dashboard/getinhouseappointments', this.httpOptions);
  
  }

  getNewJoineeList(): Observable<any>{
    return this.http.get(environment.apiUrl + 'dashboard/getnewjoinee', this.httpOptions);

  }

  markPatientAppointment(res:any): Observable<any>{
    return this.http.post<Appointment>(environment.apiUrl + 'dashboard/markappointment', res, this.httpOptions);
  }

  getPaymentPendingList(): Observable<any>
  {
    return this.http.get(environment.apiUrl + 'dashboard/getpaymentpending', this.httpOptions);
  }

  changeScheduling(res: any) {
    return this.http.post<any>(environment.apiUrl + 'dashboard/changescehduling', res, this.httpOptions);
  }

  emitMenuToggle(res:any): void{
    console.log(res);
    this.isMenuOpen.next(res);

  }
  getMessage(): Observable<any> {
    
    return this.isMenuOpen.asObservable();
}


getAppointmentForDate(res:any): Observable<any> {
  const param = new HttpParams().set('reqDate', res);

  console.log(param);
  return this.http.get(environment.apiUrl + 'dashboard/getappointmentbydate', {params: param});
}

getAllAppointment(): Observable<any> {
  return this.http.get(environment.apiUrl + 'dashboard/getalldoctorappointment' );
}

getLowStockList(): Observable<any> {  
  return this.http.get(environment.apiUrl + 'dashboard/getlowstocks?limit=' + 10 );

}
}
