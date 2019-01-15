import { AbstractControl, ValidationErrors } from '@angular/forms';
export interface TreatmentTypemaster {
    id: (number | ((control: AbstractControl) => ValidationErrors))[];
    treatmentName:  (string  | ((control: AbstractControl) => ValidationErrors))[];
    totalNoOfSittings:  (number  | ((control: AbstractControl) => ValidationErrors))[];
    totalCost:  (number  | ((control: AbstractControl) => ValidationErrors))[];
}