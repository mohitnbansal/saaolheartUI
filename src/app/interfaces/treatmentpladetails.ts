import { AbstractControl, ValidationErrors, FormArray } from '@angular/forms';
import { TreatmentTypemaster } from './masters/treatmenttypemaster';
export interface TreatmentPlanDetails{
    id: (number | ((control: AbstractControl) => ValidationErrors))[];
    treatmentDate: (Date  | ((control: AbstractControl) => ValidationErrors))[];
    duration: (string | ((control: AbstractControl) => ValidationErrors))[];
    begBp: (string | ((control: AbstractControl) => ValidationErrors))[];
    begHp:  (string | ((control: AbstractControl) => ValidationErrors))[];
    endBp: (string | ((control: AbstractControl) => ValidationErrors))[];
    endHp:  (string | ((control: AbstractControl) => ValidationErrors))[];
    complaints: (string | ((control: AbstractControl) => ValidationErrors))[];
    treatmentPlanId:  (number | ((control: AbstractControl) => ValidationErrors))[];
}