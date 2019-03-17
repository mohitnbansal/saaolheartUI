import { CustomerSales } from './../../interfaces/customerSales';
import { Observable } from 'rxjs';
import { CustomerPurchases } from './../../interfaces/customerpurchases';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      })
    };
    
  constructor(public http: HttpClient) { }

  saveStock(cust: CustomerSales): Observable<any> {
    return this.http.post<CustomerPurchases[]>(environment.apiUrl + 'sales/savesales', cust, this.httpOptions);
        }


}
