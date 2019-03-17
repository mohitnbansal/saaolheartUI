import { CustomerPurchases } from './customerpurchases';
import { InvoiceRecieptDetails } from './invoicedetails';
import { Customer } from './customer';
import { AbstractControl, ValidationErrors, FormArray, FormGroup } from '@angular/forms';
export interface CustomerSales  extends FormGroup {
    id: (number | ((control: AbstractControl) => ValidationErrors))[];
    customerId: (number | ((control: AbstractControl) => ValidationErrors))[];
    totalInvoiceAmt: (number );
    customerPurchasesList: (CustomerPurchases | ((control: AbstractControl) => ValidationErrors))[];
    paymentMode: (string );
    paymentReferenceNo: (string );
    isEmailed: (string );
    isPrinted: string;
    emailedToId: (string );  
    refundAmount:   (number );
    paymentAmount:  (number );
    bankName: string

}