import { Component, OnInit } from '@angular/core';

import { FlashMessageService } from './../../services/flash/flash-message.service';
import { CustomerService } from './../../services/customer/customer.service';
import { DoctorConsultation } from './../../interfaces/doctorconsultaion';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TreatmentPlan } from 'src/app/interfaces/treatmentplan';

@Component({
  selector: 'app-treatment-invoice-details',
  templateUrl: './treatment-invoice-details.component.html',
  styleUrls: ['./treatment-invoice-details.component.scss']
})
export class TreatmentInvoiceDetailsComponent implements OnInit {
  treatmentInvoiceForm: FormGroup;
  invoiceMasterType: any;
  treatmentInvoiceFromDb: any;
  invoiceTypeId: number;

  /**
   * Ct Angio Row Details
   */
  editingTreatmentInvoice = {};
  rowsTreatmentInvoice = [];
  columnsTreatmentInvoice = [];

   /**
   * Invoice Consultation Row Details
   */
  editingInvoice = {};
  rowsInvoice = [];
  rowInvoiceFromDb = [];
  columnsInvoice = [];

   /**
   * Payment Consultation Row Details
   */
  editingPayment = {};
  rowsPayment = [];
  columnsPayment = [];

  constructor(public activate: ActivatedRoute, public fb: FormBuilder,
    public customerService: CustomerService,
    public flashProvider: FlashMessageService) {
    this.treatmentInvoiceFromDb = this.activate.snapshot.data['data'];
    this.invoiceMasterType = this.activate.snapshot.data['invoiceType'];
    console.log(this.invoiceMasterType);
    this.invoiceMasterType.forEach(element => {
     if (element.typeName === 'TREATMENT') {
    this.invoiceTypeId = element.id;
     }
    });
    this.rowsTreatmentInvoice = this.treatmentInvoiceFromDb.treatmentPlanList;
 if (this.treatmentInvoiceFromDb.treatmentPlanList.length > 0  ) {
 this.columnsTreatmentInvoice = Object.keys(this.treatmentInvoiceFromDb.treatmentPlanList[0]).map((key) => {
    return {
      'prop': key
    };
  });
  }
  this.updateInvoiceAndPaymentDomain(this.treatmentInvoiceFromDb.treatmentPlanList);
}

private updateInvoiceAndPaymentDomain(obj: any) {
  obj.filter((ele) => {
    this.rowsInvoice.push(ele.invoiceDomain);
    this.rowInvoiceFromDb.push(ele.invoiceDomain);
    ele.invoiceDomain.invoiceReciptList.filter((val) => {
      this.rowsPayment.push(val);
    });
    return ele.invoiceDomain;
  });
  if (this.rowsInvoice.length > 0) {
    this.columnsInvoice = Object.keys(this.rowsInvoice[0]).map((key) => {
      return {
        'prop': key
      };
    });
  }
  if (this.rowsPayment.length > 0) {
    this.columnsInvoice = Object.keys(this.rowsPayment[0]).map((key) => {
      return {
        'prop': key
      };
    });
  }
  this.rowsInvoice = [...this.rowsInvoice];
}
  ngOnInit() {
    this.treatmentInvoiceForm = this.createForm({
      id: [],
      treatmentTypeMasterId: [],
      treatmentStatus: [],
      treatmentPlanDetailsList: [],
      customerId: [this.treatmentInvoiceFromDb.id],
      invoiceMasterTypeId: [this.invoiceTypeId],
      invoiceTotalamt: [],
      treatmentInvoiceDate: []
    });
  }
  private createForm(model: TreatmentPlan): FormGroup {
    return this.fb.group(model);
  }


  onSubmit() {
    console.log(this.treatmentInvoiceForm.value);
    this.customerService.saveTreatmentInvoiceDetails(this.treatmentInvoiceForm.value).subscribe((res) => {
      console.log(res);
      this.rowsTreatmentInvoice.push(res.document);
      this.rowsTreatmentInvoice = [...this.rowsTreatmentInvoice];
      this.flashProvider.show(res.error , 4000);
     }, (err) => {
       this.flashProvider.show(err.error  , 4000);
     }) ;
  }
  updateDataValue(eve: any, tar: string) {
    this.treatmentInvoiceForm.get(tar).setValue(eve.target.value);
  }
  updateValueInvoice(event, cell, rowIndex) {
    /**
     * Bug needs to be solved the Balance amount not getting reset to original DB amount when entered zero
     */
    if ( cell === 'paymentAmount' ) {
      const balAmt =     this.rowInvoiceFromDb[rowIndex]['balanceAmt'];
      console.log(balAmt)
      const newBalAmt = Number(balAmt) - Number(event.target.value);
      if (isNaN(newBalAmt)) {

      } else if (newBalAmt < 0 ) {
        this.flashProvider.show('Kindly Enter Amount Less than the balance amount', 5000);
        event.target.value = '';
        return;
      } else {
        this.rowsInvoice[rowIndex]['balanceAmt'] = newBalAmt  ;
        this.rowsInvoice = [...this.rowsInvoice];
        console.log(this.rowsInvoice);

      }
              }
    this.editingInvoice[rowIndex + '-' + cell] = false;
    this.rowsInvoice[rowIndex][cell] = event.target.value;

  }
  updateValuePayment(event, cell, rowIndex) {
    this.editingPayment[rowIndex + '-' + cell] = false;
    this.rowsPayment[rowIndex][cell] = event.target.value;
  }

  printReciept(event, cell, rowIndex, row) {
    this.customerService.printRecipt(row).subscribe((res) => {
     console.log(res);
    // const blob = new Blob([data], { type: 'text/csv' });
    const url = window.URL.createObjectURL(res);
    // window.open(url); if Image needs to open in new tab
    const a = document.createElement('a');
      a.href = url;
      a.download = 'File.pdf';
      a.click();
    }  , (errr) => {
      console.log(errr);
     });
  }


  generateReciept(event, cell, rowIndex, row) {
    console.log(row);
   this.customerService.generateReciept(row).subscribe((res) => {
      console.log(res);
      this.updateSingleInvoiceDomainAndAllPaymentList(res.document);
      this.flashProvider.show(res.error, 5000);
   }, (err) => {
     console.log(err);
     this.flashProvider.show(err.error, 5000);
   });
  }
  getRowClass = (row) => {
    if(!(row.invoiceStatus  === 'Total Payment Pending' ||  row.invoiceStatus === 'Partially Pending')){
      return {
        'row-color': true
      };
    } else {
      return{
        'row-color': false
      }
    }
    }
  updateSingleInvoiceDomainAndAllPaymentList(list:any){
    list.invoiceReciptList.filter((val) => {
      this.rowsPayment.push(val);
    });
    this.rowsPayment = [...this.rowsPayment];
    let ind: any;
    this.rowsInvoice.forEach((ele,index)=>{
  if(ele.id===list.id){
  ind = index;
  }
    });
    if(ind!=null){
    this.rowsInvoice[ind] = list;
    this.rowsInvoice = [...this.rowsInvoice];
    }
  }
  public myFilter = (d: Date): boolean => {
    const day = d.getDay();
    
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6 ;
}

}
