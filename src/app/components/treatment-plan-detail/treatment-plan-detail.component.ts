import { FlashMessageService } from './../../services/flash/flash-message.service';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from './../../services/customer/customer.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TreatmentPlanDetails } from 'src/app/interfaces/treatmentpladetails';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-treatment-plan-detail',
  templateUrl: './treatment-plan-detail.component.html',
  styleUrls: ['./treatment-plan-detail.component.scss']
})
export class TreatmentPlanDetailComponent implements OnInit {
treatmentPlanForm: FormGroup;
treatmentPlanFromDb: any;
invoiceMasterType: any;
treatMentOptionList: any = [{}];
/**
   * Ct Angio Row Details
   */
  editingTreatmentDetail = {};
  rowsTreatmentDetail = [];
  columnsTreatmentDetail = [];

  constructor(public activate: ActivatedRoute, public fb: FormBuilder,
    public customerService: CustomerService,
    public flashProvider: FlashMessageService) {
    this.treatmentPlanFromDb = this.activate.snapshot.data['data'];
    this.invoiceMasterType = this.activate.snapshot.data['invoiceType'];
 
    if(this.treatmentPlanFromDb.treatmentPlanList.length > 0) {
      this.treatmentPlanFromDb.treatmentPlanList.forEach( (element, k )  => {
        this.treatMentOptionList.push({text: element.treatmentMaster.treatmentName + '- Inv Ref' + element.invoiceDomain.id 
                                        , value: element.id});
                  if (element.treatmentPlanDetailsList.length > 0) {
                    element.treatmentPlanDetailsList.forEach(childEle => {
                     
                      this.rowsTreatmentDetail.push(childEle);
                    });
                  }
      });

    }
    console.log( this.rowsTreatmentDetail);
    if (this.treatmentPlanFromDb.treatmentPlanList.length > 0
       && this.treatmentPlanFromDb.treatmentPlanList[0].treatmentPlanDetailsList.length > 0 ) {
      this.columnsTreatmentDetail =
       Object.keys(this.treatmentPlanFromDb.treatmentPlanList[0].treatmentPlanDetailsList[0])
       .map((key) => {
         return {
           'prop': key
         };
       });
       }
 
}

  ngOnInit() {
    this.treatmentPlanForm = this.createForm({
      id: [],
      treatmentDate: [],
      duration: [],
      begBp: [],
      begHp:  [],
      endBp: [],
      endHp:  [],
      complaints: [],
      treatmentPlanId: []
    });

  }
  private createForm(model: TreatmentPlanDetails): FormGroup {
    return this.fb.group(model);
  }

  updateDataValue(eve: any, tar: string) {
    console.log(eve.target.value);
    this.treatmentPlanForm.get(tar).setValue(eve.target.value);
  }

  onSubmit() {
    console.log(this.treatmentPlanForm.value);
    this.customerService.saveTreatmentPlanDetails(this.treatmentPlanForm.value).subscribe((res) => {
      console.log(res);
      this.flashProvider.show('Treatement Plan Details  Succesfully Added!' , 4000);
     }, (err) => {
       this.flashProvider.show('Unable to update Treatement Plan Details!' , 4000);
     }) ;
  }
}
