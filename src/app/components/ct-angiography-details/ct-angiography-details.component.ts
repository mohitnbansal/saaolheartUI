import { CtAngioDetails } from './../../interfaces/ctangiodetails';
import { FlashMessageService } from 'src/app/services/flash/flash-message.service';
import { CustomerService } from './../../services/customer/customer.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CommonUtilService } from 'src/app/services/common/common-util.service';

@Component({
  selector: 'app-ct-angiography-details',
  templateUrl: './ct-angiography-details.component.html',
  styleUrls: ['./ct-angiography-details.component.scss']
})
export class CtAngiographyDetailsComponent implements OnInit {
  ctAngioForm: FormGroup;
  invoiceMasterType: any;
  ctAngioFromDb: any;
  invoiceTypeId: number;

  /**
   * Ct Angio Row Details
   */
  editingCtAngio = {};
  rowsCtAngio = [];
  columnsCtAngio = [];

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
    public flashProvider: FlashMessageService,
    public alertController: AlertController,
    public commonService:CommonUtilService) {
    this.ctAngioFromDb = this.activate.snapshot.data['data'];
    this.invoiceMasterType = this.activate.snapshot.data['invoiceType'];
    console.log(this.invoiceMasterType);
    this.invoiceMasterType.forEach(element => {
     if (element.typeName === 'CT ANGIOGRAPHY') {
    this.invoiceTypeId = element.id;
     }
    });
    this.rowsCtAngio = this.ctAngioFromDb.ctAngioDetailList;
 if (this.ctAngioFromDb.ctAngioDetailList.length > 0  ) {
 this.columnsCtAngio = Object.keys(this.ctAngioFromDb.ctAngioDetailList[0]).map((key) => {
    return {
      'prop': key
    };
  });
  }
  this.updateInvoiceAndPaymentDomain(this.ctAngioFromDb.ctAngioDetailList);
}


public updatePartialCtDetailAndInvoiceAndPaymentDomain(list:any){
  /**
   * Below will update Invoice Payment
   */
  list.invoiceDomain.invoiceReciptList.filter((val) => {
    this.rowsPayment.push(val);
  });
  this.rowsPayment = [...this.rowsPayment];
  /**
   * This will update Invoice datatable
   */
this.rowsInvoice.push(list.invoiceDomain);
this.rowInvoiceFromDb.push(list.invoiceDomain);
this.rowsInvoice = [...this.rowsInvoice];
  /**
   * Below will update CT Angio
   */
  let ind: any;
  this.rowsCtAngio.forEach((ele,index)=>{
if(ele.id===list.id){
ind = index;
}
  });
 
  if(ind!=null){
  this.rowsCtAngio[ind] = list;
  this.rowsCtAngio = [...this.rowsCtAngio];
  }
let err = new Array<String>();
err.push('Invoice Cancelled Succesfully and New Created')
  this.flashProvider.showGreen(err, 5000);
}

private updateInvoiceAndPaymentDomain(obj:any) {
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
  ngOnInit() {

    this.ctAngioForm = this.createForm({
      id: [],
      centerName:  ['Chitra Scan Center'],
      refDate: [],
      scanTestName: ['CT Coronory Scan'],
      addLine1: ['Sanjeevanee (Karnataka Hospital)'],
      addLine2:  ['172/A, Naigaum, Behind Dadar Fire Brigade Statation'],
      pincode:  ['4000020'],
      city:  ['Dadar(east), Mumbai'],
      contactNo:  ['24129860'],
      landmark:  ['Near Sharda Cineam JyotiPhule Road'],
      invoice: [],
      invoiceMasterTypeId:  [this.invoiceTypeId],
      customerId: [this.ctAngioFromDb.id],
      invoiceTotalamt: [7500]
    });
  }
  private createForm(model: CtAngioDetails): FormGroup {
    return this.fb.group(model);
  }

  onSubmit() {
    console.log(this.ctAngioForm.value);
    this.customerService.saveCtAngioDetails(this.ctAngioForm.value).subscribe((res) => {
     let val:any = []
     val.push(res.document);
     this.updateInvoiceAndPaymentDomain(val as any);
     this.rowsCtAngio.push(res.document);
     this.rowsCtAngio = [...this.rowsCtAngio];
      this.flashProvider.showGreen(res.error , 4000);
     }, (err) => {
       this.flashProvider.showRed(err.error , 4000);
     }) ;
  }
  updateValueCtAngio(event, cell, rowIndex) {
    this.editingCtAngio[rowIndex + '-' + cell] = false;
    this.rowsCtAngio[rowIndex][cell] = event.target.value;
  }
  updateDataValue(eve: any, tar: string) {
    
    let val: any;
 
      val = eve.target.value;
  
    this.ctAngioForm.get(tar).setValue(val);
  }

  updateValueInvoice(event, cell, rowIndex) {
    /**
     * Bug needs to be solved the Balance amount not getting reset to original DB amount when entered zero
     */

    if ( cell === 'paymentAmount' ) {
      const balAmt =     this.rowInvoiceFromDb[rowIndex]['balanceAmt'];
 
      const newBalAmt = Number(balAmt) - Number(event.target.value);
      if (isNaN(newBalAmt)) {

      } else if (newBalAmt < 0 ) {
        let err= new Array<string>();
        err.push('Kindly Enter Amount Less than the balance amount')
        this.flashProvider.showRed(err, 5000);
        event.target.value = '';
        return;
      } else {
        this.rowsInvoice[rowIndex]['balanceAmt'] = newBalAmt  ;
        this.rowsInvoice = [...this.rowsInvoice];
       

      }
              } else if ( cell == 'cancelInvoice' && event.target.value == 'Invoice Cancelled' ){
                this.presentAlertRadio(this.rowsInvoice[rowIndex]);

              }
    this.editingInvoice[rowIndex + '-' + cell] = false;
    this.rowsInvoice[rowIndex][cell] = event.target.value;
    

  }
  async presentAlertRadio(ele:any) {
    const alert = await this.alertController.create({
      header: 'New Invoice Creation',
      inputs: [
        {
          name: 'newInvoiceAmt',
          type: 'number',
          id: 'newInvoiceAmt',
          value: 4500,
          placeholder: 'New Invoice Amount'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (res) => {
            console.log(res);
            if(res){
              ele['newInvoiceAmountInCaseofCancel'] = res.newInvoiceAmt;
              this.ctAngioForm.value['invoiceDomain'] = ele
             this.customerService.cancelAndCreateNewInvoice(this.ctAngioForm.value).subscribe((res)=>{
              this.updatePartialCtDetailAndInvoiceAndPaymentDomain(res.document);
             },(err)=>{
console.log(err);
             });

            }
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
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
        this.updateSingleInvoiceDomainAndAllPaymentList(res.document);
          console.log(res);
          this.flashProvider.showGreen(res.error, 5000);
       }, (err) => {
         console.log(err);
         this.flashProvider.showRed(err.error, 5000);
       });
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

        
  public myFilter = (d: Date): boolean => {
    const day = d.getDay();
    
    // Prevent Saturday and Sunday from being selected.
    return day !== 0;
}

printMou(id: number): void{
  this.customerService.printMou(id).subscribe((res) => {
this.commonService.saveFile(res);
  }, (err) => {
    const er = [] ;
    er.push('Unable to Print Mou Please Contact IT Support')
    this.flashProvider.showRed(er,8000);
  });
}
    }
