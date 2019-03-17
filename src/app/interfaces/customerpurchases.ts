import { InvoiceRecieptDetails } from './invoicedetails';
import { Customer } from './customer';
import { AbstractControl, ValidationErrors, FormArray, FormGroup } from '@angular/forms';
export interface CustomerPurchases  extends FormGroup {
    id: (number | ((control: AbstractControl) => ValidationErrors))[];
    stockDomainId: (number | ((control: AbstractControl) => ValidationErrors))[];
    quantityPurchased:  (number | ((control: AbstractControl) => ValidationErrors))[];
    rateOfStock: (number | ((control: AbstractControl) => ValidationErrors))[];
    price: (number | ((control: AbstractControl) => ValidationErrors))[];
    isCancelled: (string | ((control: AbstractControl) => ValidationErrors))[];
    generetedBy: (number | ((control: AbstractControl) => ValidationErrors))[];
    customerSaledId: (number | ((control: AbstractControl) => ValidationErrors))[];
    customerId: (number | ((control: AbstractControl) => ValidationErrors))[];
    totalInvoiceAmt: (number | ((control: AbstractControl) => ValidationErrors))[];
}