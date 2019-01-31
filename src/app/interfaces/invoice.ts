import { InvoiceRecieptDetails } from './invoicedetails';
import { Customer } from './customer';
import { AbstractControl, ValidationErrors, FormArray, FormGroup } from '@angular/forms';
export interface Invoice  extends FormGroup {
    id: (number | ((control: AbstractControl) => ValidationErrors))[];
    invoiceReciptList: (FormArray[]  | ((control: AbstractControl) => ValidationErrors))[];
    invoiceTypeId: (number | ((control: AbstractControl) => ValidationErrors))[];
    totalInvoiceAmt:  (number | ((control: AbstractControl) => ValidationErrors))[];
    balanceAmt: (number | ((control: AbstractControl) => ValidationErrors))[];
    discountAmt: (number | ((control: AbstractControl) => ValidationErrors))[];
    invoiceStatus: (string | ((control: AbstractControl) => ValidationErrors))[];
    generetedBy: (number | ((control: AbstractControl) => ValidationErrors))[];
}