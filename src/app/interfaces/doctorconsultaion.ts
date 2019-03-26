import { ValidationErrors, AbstractControl } from '@angular/forms';
import { Invoice } from './invoice';
export interface DoctorConsultation {
    id: (number | ((control: AbstractControl) => ValidationErrors))[];
    consulationDate:  (Date  | ((control: AbstractControl) => ValidationErrors))[];
    consultationBy: (string  | ((control: AbstractControl) => ValidationErrors))[];
    daignosisSummary: (string | ((control: AbstractControl) => ValidationErrors))[];
    testSuggested: (string | ((control: AbstractControl) => ValidationErrors))[];
    typeOfTreatement:  (number | ((control: AbstractControl) => ValidationErrors))[];
    invoice: (Invoice | ((control: AbstractControl) => ValidationErrors))[];
    invoiceTotalamt: (number | ((control: AbstractControl) => ValidationErrors))[];
    customerId: (number | ((control: AbstractControl) => ValidationErrors))[];
    invoiceMasterTypeId: (number | ((control: AbstractControl) => ValidationErrors))[];
 }