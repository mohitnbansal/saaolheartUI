import { AbstractControl, ValidationErrors } from '@angular/forms';

export interface Customer {
    id: (number | ((control: AbstractControl) => ValidationErrors))[];
    firstName: (string | ((control: AbstractControl) => ValidationErrors))[];
    lastName:  (string  | ((control: AbstractControl) => ValidationErrors))[];
    middleName: (string  | ((control: AbstractControl) => ValidationErrors))[];
    address: (string | ((control: AbstractControl) => ValidationErrors))[];
    emailId: (string | ((control: AbstractControl) => ValidationErrors))[];
    gender:  (string | ((control: AbstractControl) => ValidationErrors))[];
    martialStatus: (string | ((control: AbstractControl) => ValidationErrors))[];
    dob: (Date | ((control: AbstractControl) => ValidationErrors))[];
    age: (number | ((control: AbstractControl) => ValidationErrors))[];
    mobileNo: (number | ((control: AbstractControl) => ValidationErrors))[];
    altMobileNo: (number | ((control: AbstractControl) => ValidationErrors))[];
    vistingFor: (string | ((control: AbstractControl) => ValidationErrors))[];
    aadharNumber: (number | ((control: AbstractControl) => ValidationErrors))[];
    occupation: (string | ((control: AbstractControl) => ValidationErrors))[];
    panNumber: (string | ((control: AbstractControl) => ValidationErrors))[];    
}
