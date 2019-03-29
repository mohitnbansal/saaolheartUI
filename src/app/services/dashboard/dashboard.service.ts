import { Appointment } from './../../interfaces/appointment';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  isOpen = false;

  @Output() change: EventEmitter<any> = new EventEmitter();

  @Output() callModalEvent = new EventEmitter();

  constructor(public http: HttpClient) { }


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
}
