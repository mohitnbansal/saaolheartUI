import { TreatmentPlanDetails } from 'src/app/interfaces/treatmentpladetails';
import { TreatmentPlan } from './../../interfaces/treatmentplan';
import { CtAngioDetails } from './../../interfaces/ctangiodetails';
import { DoctorConsultation } from './../../interfaces/doctorconsultaion';
import { Customer } from '../../interfaces/customer';
import { FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
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

    generateReciept(invoice:any): Observable<any>{
      return this.http.post<DoctorConsultation>(environment.apiUrl + 'customer/generatereciept', invoice ,this.httpOptions);
    
    }

    printRecipt(invo: any): Observable<any> {
      return this.http.post(environment.apiUrl + 'customer/printreciept', invo ,   {responseType: 'blob' as 'json'} );
    }

    saveCtAngioDetails(doct: CtAngioDetails): Observable<any>{
      return this.http.post<CtAngioDetails>(environment.apiUrl + 'customer/savectangiodetails', doct , this.httpOptions);
    }
    saveTreatmentInvoiceDetails(doct: TreatmentPlan): Observable<any>{
      return this.http.post<TreatmentPlan>(environment.apiUrl + 'customer/savetreatmentdetails', doct , this.httpOptions);
    }

    saveTreatmentPlanDetails(doct: TreatmentPlanDetails): Observable<any> {
      return this.http.post<TreatmentPlanDetails>(environment.apiUrl + 'customer/savetreatmentplandetails', doct , this.httpOptions);
    }

    getCustomerListByNameOrMobile(par: any): Observable<any> {
      const params = new HttpParams().set('searchParam', par);
      return this.http.get(environment.apiUrl + 'customer/getcustomerbysearch', {params: params});
  
    }

    cancelAndCreateNewInvoice(ele: any): Observable<any> {
      return this.http.post<any>(environment.apiUrl + 'customer/cancelInvoice', ele , this.httpOptions);
    }
    
    getcustomeralltreatment(id: number): Observable<any> {
      return this.http.get<any>(environment.apiUrl + 'customer/getcustomeralltreatment/' + id, this.httpOptions);
    }

    saveFile(data: any, filename?: string) {
      console.log(data)

      const file = new Blob([data], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    }
}
