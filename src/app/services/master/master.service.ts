import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      })
    };
  constructor(public http: HttpClient) { }


  getAllInvoiceMasterTypes(): Observable<any> {
    console.log(environment.apiUrl);
    return this.http.get(environment.apiUrl + 'master/invoicemaster', this.httpOptions);
  }
}
