import { AbstractControl, ValidationErrors, FormArray } from '@angular/forms';
import { TreatmentTypemaster } from './masters/treatmenttypemaster';
export interface TreatmentPlan{
    id: (number | ((control: AbstractControl) => ValidationErrors))[];
    treatmentTypeMasterId: (number  | ((control: AbstractControl) => ValidationErrors))[];
    treatmentStatus: (string | ((control: AbstractControl) => ValidationErrors))[];
    treatmentPlanDetailsList:  (FormArray[] | ((control: AbstractControl) => ValidationErrors))[];
    customerId:  (number | ((control: AbstractControl) => ValidationErrors))[];
}