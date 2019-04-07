import { Observable } from 'rxjs';
import { Stock } from './../../interfaces/stock';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      })
    };
    
  constructor(public http: HttpClient) { }

  saveStock(cust: Stock): Observable<any> {
    return this.http.post<Stock>(environment.apiUrl + 'stock/addstock', cust, this.httpOptions);
        }

  getAllStockCategory(): Observable<any>{
    return this.http.get(environment.apiUrl + 'stock/getStockCategory', this.httpOptions);
  }

  getAllStockByOrder():Observable<any>{
    return this.http.get(environment.apiUrl +'stock/getAllStockList', this.httpOptions)
  }

  getStockByLikeName(eve:any): Observable<any> {
    const params = new HttpParams().set('searchParam', eve);
    return this.http.get(environment.apiUrl +'stock/getstockbysearch', {params: params})
  }
 
getStockbyId(id:any): Observable<any>{
  return this.http.get(environment.apiUrl + 'stock/getstockdetail/' + id, this.httpOptions)
}
getSalesStockDetailsById(id:number):Observable<any>{
  return this.http.get(environment.apiUrl + 'stock/getsalesstockbydetails/' + id, this.httpOptions)
}

updateStock(res:Stock):Observable<any>{
return this.http.post<any>(environment.apiUrl + 'stock/updatestock/' + res.id, res, this.httpOptions)
}
}
