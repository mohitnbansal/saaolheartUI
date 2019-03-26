import { FlashMessageService } from './../../services/flash/flash-message.service';
import { CustomerService } from './../../services/customer/customer.service';
import { DoctorConsultation } from './../../interfaces/doctorconsultaion';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnChanges, DoCheck, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss']
})
export class DoctorDetailsComponent implements OnInit {
  doctorDetailsForm: FormGroup;
  invoiceMasterType: any;
  doctorDetailfromDb: any;
  invoiceTypeId: number;

  /**
   * Doctor Consultation Row Details
   */
  editingDoctor = {};
  rowsDoctor = [];
  columnsDoctor = [];

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
  this.doctorDetailfromDb = this.activate.snapshot.data['data'];
  this.invoiceMasterType = this.activate.snapshot.data['invoiceType'];
  
  this.invoiceMasterType.forEach(element => {
   if (element.typeName === 'DOCTOR CONSULTATION') {
  this.invoiceTypeId = element.id;
   }
  });

 this.rowsDoctor = this.doctorDetailfromDb.doctorConsultationList;
 if (this.doctorDetailfromDb.doctorConsultationList.length > 0  ) {
 this.columnsDoctor = Object.keys(this.doctorDetailfromDb.doctorConsultationList[0]).map((key) => {
    return {
      'prop': key
    };
  });
 }
    this.updateInvoiceAndPaymentDomain(this.doctorDetailfromDb.doctorConsultationList);
    console.log(this.doctorDetailfromDb.doctorConsultationList);
   
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
  if(ind){
  this.rowsInvoice[ind] = list;
  this.rowsInvoice = [...this.rowsInvoice];
  }
}
getRowClass = (row) => {
if(!(row.invoiceStatus=='Total Payment Pending' ||  row.invoiceStatus=='Partially Pending')){
  return {
    'row-color': true
  };
}else{
  return{
    'row-color': false
  }
}
}
  private updateInvoiceAndPaymentDomain(obj:any) {
    obj.filter((ele) => {
      console.log(ele);
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
   
          this.doctorDetailsForm = this.createForm({
            id: [],
            consulationDate:  [],
            consultationBy: [''],
            daignosisSummary: [''],
            testSuggested: [''],
            typeOfTreatement:  [],
            invoice:  [],
            customerId: [this.doctorDetailfromDb.id],
            invoiceTotalamt: [, Validators.required],
            invoiceMasterTypeId: [this.invoiceTypeId]
          });
     
  }
 

  private updateForm(model: Partial<DoctorConsultation>): void {
    this.doctorDetailsForm.patchValue(model);
  }
  private createForm(model: DoctorConsultation): FormGroup {
    return this.fb.group(model);
  }
  
  updateValueDoctor(event, cell, rowIndex) {
    this.editingDoctor[rowIndex + '-' + cell] = false;
    this.rowsDoctor[rowIndex][cell] = event.target.value;
  }

  onSubmit() {
    console.log(this.doctorDetailsForm.value);
    this.customerService.saveDoctorDetails(this.doctorDetailsForm.value).subscribe((res) => {

      this.rowsDoctor.push(res.document);
      this.rowsDoctor = [...this.rowsDoctor];
      let val:any = []
      val.push(res.document);
      this.updateInvoiceAndPaymentDomain(val as any)
      this.flashProvider.show('Doctor Details Succesfully Added!' , 4000);
     }, (err) => {
       this.flashProvider.show('Unable to update doctor details!' , 4000);
     }) ;
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
this.updateSingleInvoiceDomainAndAllPaymentList(res.document)
      console.log(res);
      this.flashProvider.show('Reciept Generated for the given Invoice', 5000);
   }, (err) => {
     console.log(err);
   });
  }
  updateDataValue(eve: any, tar: string) {
    let val: any;
    if (tar === 'typeOfTreatement') {
      val = parseInt(eve.target.value, 10);
    } else {
      val = eve.target.value;
    }
    this.doctorDetailsForm.get(tar).setValue(val);
  }
}
