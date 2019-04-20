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
getAllSalesList():Observable<any>{
  return this.http.get<any>(environment.apiUrl + 'sales/getallsales');
}

getSalesDetailById(res:number):Observable<any>{
  return this.http.get<any>(environment.apiUrl +'sales/findsalesbyid/'+res);
}

updateSales(res:any): Observable<any> {
  return this.http.post<CustomerPurchases[]>(environment.apiUrl + 'sales/updatesales', res, this.httpOptions);
      }

printSalesRecipt(res: any): Observable<any>{
  return this.http.post<any>(environment.apiUrl + 'sales/printrecipt' , res,  {responseType: 'blob' as 'json'});
}

emailReciept(res: any): Observable<any>{
  return this.http.post<any>(environment.apiUrl + 'sales/emailreciept', res, this.httpOptions);
}

}
