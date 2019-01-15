import { AbstractControl, ValidationErrors } from '@angular/forms';
export interface InvoiceRecieptDetails{
    id: (number | ((control: AbstractControl) => ValidationErrors))[];
    invoiceId:  (number  | ((control: AbstractControl) => ValidationErrors))[];
    isPrinted: (string  | ((control: AbstractControl) => ValidationErrors))[];
    paymentMode: (number | ((control: AbstractControl) => ValidationErrors))[];
    paymentReferenceNo: (string | ((control: AbstractControl) => ValidationErrors))[];
    paymentDate:  (Date | ((control: AbstractControl) => ValidationErrors))[];
    recievedBy: (number | ((control: AbstractControl) => ValidationErrors))[];
    isEmailed: (string | ((control: AbstractControl) => ValidationErrors))[];
    emailedToId: (string | ((control: AbstractControl) => ValidationErrors))[];
}