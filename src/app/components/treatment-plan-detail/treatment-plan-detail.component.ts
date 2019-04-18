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

  rowsTreatmentDetailBca = [];

  constructor(public activate: ActivatedRoute, public fb: FormBuilder,
    public customerService: CustomerService,
    public flashProvider: FlashMessageService) {
    this.treatmentPlanFromDb = this.activate.snapshot.data['data'];
    this.invoiceMasterType = this.activate.snapshot.data['invoiceType'];
 console.log(this.treatmentPlanFromDb.treatmentPlanList)
    if(this.treatmentPlanFromDb.treatmentPlanList.length > 0) {
      this.treatMentOptionList = [];
      this.treatmentPlanFromDb.treatmentPlanList.forEach( (element, k )  => {
        this.treatMentOptionList.push({text: element.treatmentMaster.treatmentName + '- Inv Ref No :- ' + element.invoiceDomain.id 
                                        , value: element.id});
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
changeTreatmentPlanTable(event: any) {

  
  this.treatmentPlanFromDb.treatmentPlanList.forEach( (element, k )  => {

  if (element.treatmentPlanDetailsList.length > 0) {
    if (Number(event.target.value) === Number(element.id)) {
      console.log(element.id);
    element.treatmentPlanDetailsList.forEach(childEle => {
if (childEle.treatmentType === 'Treatment ECP') {
  this.rowsTreatmentDetail.push(childEle);
} else {
  this.rowsTreatmentDetailBca.push(childEle);
}

     
    });
    this.rowsTreatmentDetailBca = [...this.rowsTreatmentDetailBca];
    this.rowsTreatmentDetail = [...this.rowsTreatmentDetail];
  }
  }
});
}
  ngOnInit() {

  }


}
