import { FlashMessageService } from 'src/app/services/flash/flash-message.service';
import { AlertController } from '@ionic/angular';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { Pipe } from '@angular/compiler/src/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
export class AppointmentPage implements OnInit {
  dateTime = new Date();
  rows= [];
  columns = [];
  patientList = [];
  markAppointmentStat:any;
  constructor( public dashboardService: DashboardService,
    public alertController:AlertController,
    public flashService: FlashMessageService) { 
      this.getAllAppointmentList();
    
      this.getListByDate(formatDate(new Date, 'dd-MM-yyyy', 'en-US', '+0530'));
    }

  ngOnInit() {
  }
getAllAppointmentList(){
  this.dashboardService.getAllAppointment().subscribe((res) => {
console.log(res)
this.rows = res.document;
if(this.rows !== null && this.rows.length > 0 ){
this.rows = [...this.rows];
}
  }, (err) => {
console.log(err);
  });
}
getListByDate(res: any) {
  console.log(res);
this.dashboardService.getAppointmentForDate(res).subscribe((response) => {
  this.patientList = response.document;
console.log(response);
},(err) => {
console.log(err);
})
};
async markAppointmentAlert(appoint:any) {
  if(appoint.isVisitDone !== 'Completed'){
  const alert = await this.alertController.create({
    header: 'Is Visit Done?',
    inputs: [
      {
        name: 'radio1',
        type: 'radio' ,
        label: 'Yes',
        value: 'Completed'
      },
      {
        name: 'radio2',
        type : 'radio',
        label: 'No',
        value: 'Cancelled'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (res) => {
          
          
        }
      }, {
        text: 'Ok',
        handler: (res) => {
          console.log(res);
          console.log(appoint);
          this.markAppointmentStat = appoint;
          this.markAppointmentStat.isVisitDone = res;
          this.markAppointmentStatus(this.markAppointmentStat);
        }
      }
    ]
  });
  
  await alert.present();
}else if(appoint.isVisitDone === 'Cancelled'){
  const err = [];
  err.push('Customer DR. Appointment Cancelled');
  this.flashService.show(err, 6000);
} else {
  let err = [];
  err.push('Pateint Appointment Already Completed');
  this.flashService.show(err,5000);
}
}

markAppointmentStatus(res: any) {
  
this.dashboardService.markPatientAppointment(res).subscribe(( res ) => {
  let err = [];
  err.push('Pateint Appointment Marked as Completed');
this.flashService.show(err,5000);
}, (err) => {
console.log(err);
});
}

  public myFilter = (d: Date): boolean => {
    const day = d.getDay();

    return day !== 0 ;
}

}
