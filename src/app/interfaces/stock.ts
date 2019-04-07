import { AbstractControl, ValidationErrors } from '@angular/forms';

export interface Stock {
    id: (number | ((control: AbstractControl) => ValidationErrors))[];
    stockCategoryid:  (number  | ((control: AbstractControl) => ValidationErrors))[];
    stockCategory:  (number  | ((control: AbstractControl) => ValidationErrors))[];
    stockName: (string  | ((control: AbstractControl) => ValidationErrors))[];
    stockDescription: (string | ((control: AbstractControl) => ValidationErrors))[];
    qtyOfStockAvailable: (number | ((control: AbstractControl) => ValidationErrors))[];
    currentRateOfStock:  (number | ((control: AbstractControl) => ValidationErrors))[];
    curentStockValue:  (number | ((control: AbstractControl) => ValidationErrors))[];
    addedOn:  (string | ((control: AbstractControl) => ValidationErrors))[];
    lastUpdatedOn:  (string | ((control: AbstractControl) => ValidationErrors))[];
    qtyOfStockToUpdate:   (number | ((control: AbstractControl) => ValidationErrors))[];
    reasonForUpdate: (string | ((control: AbstractControl) => ValidationErrors))[];
}
