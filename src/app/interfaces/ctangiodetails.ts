import { ValidationErrors, AbstractControl } from '@angular/forms';
import { Invoice } from './invoice';
export interface CtAngioDetails {
    id: (number | ((control: AbstractControl) => ValidationErrors))[];
    centerName:  (string  | ((control: AbstractControl) => ValidationErrors))[];
    refDate: (Date  | ((control: AbstractControl) => ValidationErrors))[];
    scanTestName: (string | ((control: AbstractControl) => ValidationErrors))[];
    addLine1: (string | ((control: AbstractControl) => ValidationErrors))[];
    addLine2:  (string | ((control: AbstractControl) => ValidationErrors))[];
    pincode:  (string | ((control: AbstractControl) => ValidationErrors))[];
    city:  (string | ((control: AbstractControl) => ValidationErrors))[];
    contactNo:  (string | ((control: AbstractControl) => ValidationErrors))[];
    landmark:  (string | ((control: AbstractControl) => ValidationErrors))[];
    invoice: (Invoice | ((control: AbstractControl) => ValidationErrors))[];
    customerId: (number | ((control: AbstractControl) => ValidationErrors))[];
    invoiceMasterTypeId: (number | ((control: AbstractControl) => ValidationErrors))[];
    invoiceTotalamt: (number | ((control: AbstractControl) => ValidationErrors))[];
}