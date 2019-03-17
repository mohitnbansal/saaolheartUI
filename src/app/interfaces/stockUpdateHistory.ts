import { AbstractControl, ValidationErrors } from '@angular/forms';

export interface StockUpdateHistory {
    id: (number | ((control: AbstractControl) => ValidationErrors))[];
    qtyUpdated:  (number  | ((control: AbstractControl) => ValidationErrors))[];
    stockRate: (string  | ((control: AbstractControl) => ValidationErrors))[];
    availableStock: (string | ((control: AbstractControl) => ValidationErrors))[];
    stockValue: (number | ((control: AbstractControl) => ValidationErrors))[];
    reasonForUpdate: (number | ((control: AbstractControl) => ValidationErrors))[];
    isManualUpdate: (number | ((control: AbstractControl) => ValidationErrors))[];
}
