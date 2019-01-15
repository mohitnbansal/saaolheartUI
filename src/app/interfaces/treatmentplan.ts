import { AbstractControl, ValidationErrors, FormArray } from '@angular/forms';
import { TreatmentTypemaster } from './masters/treatmenttypemaster';
export interface TreatmentPlan{
    id: (number | ((control: AbstractControl) => ValidationErrors))[];
    treatmentPlanId: (number  | ((control: AbstractControl) => ValidationErrors))[];
    treatmentMaster: (TreatmentTypemaster | ((control: AbstractControl) => ValidationErrors))[];
    treatmentStatus: (string | ((control: AbstractControl) => ValidationErrors))[];
    treatmentPlanDetailsList:  (FormArray[] | ((control: AbstractControl) => ValidationErrors))[];
  
}