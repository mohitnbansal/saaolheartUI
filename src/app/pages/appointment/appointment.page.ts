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
    public alertController:AlertController) { 
      this.getAllAppointmentList();
    
      this.getListByDate(formatDate(new Date, 'dd-MM-yyyy', 'en-US', '+0530'));
    }

  ngOnInit() {
  }
getAllAppointmentList(){
  this.dashboardService.getAllAppointment().subscribe((res) => {
console.log(res)
this.rows = res.document;
this.rows = [...this.rows];
  }, (err) => {
console.log(err);
  });
}
getListByDate(res: any) {
  console.log(res)
this.dashboardService.getAppointmentForDate(res).subscribe((response) => {
  this.patientList = response.document;
console.log(response)
},(err) => {
console.log(err);
})
};
async markAppointmentAlert(appoint:any) {
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
}

markAppointmentStatus(res: any) {
this.dashboardService.markPatientAppointment(res).subscribe(( res ) => {
console.log(res);
}, (err) => {
console.log(err);
});
}

  public myFilter = (d: Date): boolean => {
    const day = d.getDay();
    
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6 ;
}

}
