import { AbstractControl, ValidationErrors } from '@angular/forms';

export interface Customer {
    firstName: (string | ((control: AbstractControl) => ValidationErrors))[];
    lastName:  (string  | ((control: AbstractControl) => ValidationErrors))[];
    middleName: (string  | ((control: AbstractControl) => ValidationErrors))[];
    address: (string | ((control: AbstractControl) => ValidationErrors))[];
    emailId: (string | ((control: AbstractControl) => ValidationErrors))[];
    gender:  (string | ((control: AbstractControl) => ValidationErrors))[];
    martialStatus: (string | ((control: AbstractControl) => ValidationErrors))[];
    dob: (Date | ((control: AbstractControl) => ValidationErrors))[];
    mobileNo: (number | ((control: AbstractControl) => ValidationErrors))[];
    altMobileNo: (number | ((control: AbstractControl) => ValidationErrors))[];
    vistingFor: (string | ((control: AbstractControl) => ValidationErrors))[];
    aadharNumber: (number | ((control: AbstractControl) => ValidationErrors))[];
    occupation: (string | ((control: AbstractControl) => ValidationErrors))[];
    landlineOff: (string | ((control: AbstractControl) => ValidationErrors))[];
    landlineRes: (string | ((control: AbstractControl) => ValidationErrors))[];
}
