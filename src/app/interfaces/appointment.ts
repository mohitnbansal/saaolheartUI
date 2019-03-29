import { ValidationErrors, AbstractControl } from '@angular/forms';
import { Invoice } from './invoice';
export interface Appointment {
    id: number;
    customerId: number;
    expectedTime: Date;
    dateOfScheduling: Date;
    visitingForDescription: string;
    typeOfAppointmentString: string;
    treatmentDetailPlanId: number;
    treatmentPlanId: number;
    machineNo:number;
    isVisitDone:string;
}