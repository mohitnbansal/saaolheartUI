import { ValidationErrors, AbstractControl } from '@angular/forms';
export interface InvoiceTypeMaster {
    id: (number | ((control: AbstractControl) => ValidationErrors))[];
    typeName:  (string  | ((control: AbstractControl) => ValidationErrors))[];
 }