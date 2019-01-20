import { DoctorConsultation } from './../../interfaces/doctorconsultaion';
import { Customer } from '../../interfaces/customer';
import { FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      })
    };
  constructor(public http: HttpClient) { }

  saveCustomer(cust: Customer): Observable<any> {
return this.http.post<Customer>(environment.apiUrl + 'customer/addcustomer', cust, this.httpOptions);
    }

    getAllCustomerSortedList(): Observable<any> {
      console.log(environment.apiUrl);
      return this.http.get(environment.apiUrl + 'customer/getAllCustomersList', this.httpOptions);
    }

    getCustomerById(id: string): Observable<any> {
      return this.http.get(environment.apiUrl + 'customer/detail/' + id, this.httpOptions);
    }

    saveDoctorDetails(doct: DoctorConsultation): Observable<any>{
      return this.http.post<DoctorConsultation>(environment.apiUrl + 'customer/savedoctordetails', doct ,this.httpOptions);
    }
}
