import { DoctorConsultation } from './../../interfaces/doctorconsultaion';
import { Appointment } from './../../interfaces/appointment';
import { ActivatedRoute } from '@angular/router';
import { DayViewSchedulerComponent } from './../../components/day-view-scheduler/day-view-scheduler.component';
import { FlashMessageService } from './../../services/flash/flash-message.service';
import { MarkAppointmentPage } from './../../components/mark-appointment/mark-appointment.page';
import { ModalController, AlertController } from '@ionic/angular';
import { DashboardService } from './../../services/dashboard/dashboard.service';
import { colors } from './../../utils/color';
import { Component, OnInit, Output, EventEmitter, ViewChild, ViewChildren, AfterViewInit } from '@angular/core';

import {  ChangeDetectionStrategy } from '@angular/core';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';

import { addHours, startOfDay, getTime, format, parse } from 'date-fns';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-dashboard-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard-home.page.html',
  styleUrls: ['./dashboard-home.page.scss'],
})
export class DashboardHomePage implements OnInit ,AfterViewInit{
  public patientList: any = [];
  public patientQueList: any[] = [];
  public bcaPateintList: any[] = [];
  public rowsNewJoinee: any = [];
  public rowsNewJoineeForFilter:any = [];
  public markAppointmentStat: Appointment = <Appointment>{};
   users = [
    {
      id: 1,
      name: 'Machine 1',
      color: colors.red
    },
    {
      id: 2,
      name: 'Machine 2',
      color: colors.blue
    },
    {
      id: 3,
      name: 'Machine 3',
      color: colors.red
    },
    {
      id: 4,
      name: 'Machine 4',
      color: colors.red
    },
    {
      id: 5,
      name: 'Machine 5',
      color: colors.blue
    }
  ];
  
  viewDate = new Date();
  events: CalendarEvent[] =[];
  refresh: Subject<any> = new Subject();
@ViewChildren(DayViewSchedulerComponent) dayView :DayViewSchedulerComponent;

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
   
    event.start = newStart;
    event.end = newEnd;
    console.log(event);
    let  app: Appointment = <Appointment>{};
app = event.meta.appointmentDetail;
app.expectedTime = event.start;
    this.dashboardService.changeScheduling(app).subscribe((res)=>{
      this.flashService.show(res.error,4000);
    },(err)=>{
      this.flashService.show(err.error,4000);
    });
    this.events = [...this.events];
  }

  userChanged({ event, newUser }) {
     event.color = newUser.color;
     event.meta.user = newUser;
     console.log(event);
     let  app: Appointment = <Appointment>{};
app = event.meta.appointmentDetail;
app.machineNo = event.meta.user.id;
this.dashboardService.changeScheduling(app).subscribe((res)=>{
  this.flashService.show(res.error,4000);
},(err)=>{
  this.flashService.show(err.error,4000);
});
     this.events = [...this.events];
  }
  model:any;
  constructor(public dashboardService:DashboardService,
    public modalController:ModalController,
    public flashService:FlashMessageService,
    public activate: ActivatedRoute,
    public alertController: AlertController) { 
      // this.dashboardService.getInHouseAppointmentList().subscribe((res)=>{
      //   this.patientList = res.document;
      //   console.log(res);
      //     });
    this.getPateintsQueueList(null);
    this.dashboardService.callModalEvent.subscribe((res)=>{
     this.presentModal(res);
   });
   this.getNewJoineeList();
  }
  
  ngOnInit() {
    this.patientList = this.activate.snapshot.data['data'].document != null ?  this.activate.snapshot.data['data'].document: [];
    this.patientQueList = this.activate.snapshot.data['patientQue'] != null ?  this.activate.snapshot.data['patientQue']: [];

    this.getPateintsQueueList(this.patientQueList);
  
  //   this.dashboardService.change.subscribe((res)=>{
  //    this.getPateintsQueueList(res);
  //  });
  //  this.dashboardService.callModalEvent.subscribe((res)=>{

  //   this.presentModal(res);
  // });

  }
ngAfterViewInit(){
  this.dayView['first'].newChange.subscribe((res)=>{
    this.presentModal(res);
  })
}


  async presentModal(ele:any) {
    const modal = await this.modalController.create({
      component: MarkAppointmentPage,
      cssClass: 'my-custom-modal-css',
      
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    console.log(data);
    /**
     * Save the detail to server and update the Customer Appointment and referesh
     */
    
              ele.event.meta.appointmentDetail['isVisitDone'] = data.isVisitDone;
              ele.event.meta.appointmentDetail['duration'] = data.duration;
              ele.event.meta.appointmentDetail['postScheduleDescription'] = data.complaints;
              ele.event.meta.appointmentDetail['start'] =  ele.event.start;
              ele.event.meta.appointmentDetail['end'] =  ele.event.end;
              ele.event.meta.appointmentDetail['machineNo'] =  ele.event.meta.user.id;
            this.dashboardService.updateTreatmentSchedule(ele.event.meta.appointmentDetail).subscribe((res)=>{
this.dashboardService.change.emit();
this.flashService.show('Appointment Scheduled Succesfully for Customer '+ ele.event.title,5000);

            },(err)=>{
              this.flashService.show('Appointment Scheduled Failed for Customer '+ ele.event.title,5000);

            });

  }

  getPateintsQueueList(list: any){
    if(list != null){
      this.patientQueSortAndPustFunction(list);
      this.refresh.next();
    }else{
    this.dashboardService.getPateintsQueueList().subscribe((res)=>{
this.patientQueSortAndPustFunction(res);
this.refresh.next();

    }, (err) => {
      console.log(err);
    });
  }
  }
 
  patientQueSortAndPustFunction(res: any){
    this.bcaPateintList = [];
    this.events = [];
    if(res != null && res.document != null){
    res.document.forEach((ele, ind) => {
      if (ele.typeOfAppointment === 'TREATMENT_ECP') {
        let user = {};
        this.users.forEach((use) => {
          if (use.id === ele.machineNo) {
            user = use;
          }
        });
        let eve: CalendarEvent = <CalendarEvent>{};
        eve.title = ele.customerName;
        //eve.start = addHours(startOfDay(ele.expectedTime), getTime(ele.expectedTime));
        if (ele.isVisitDone === 'Completed') {
          eve.cssClass = 'strike';
        }
        eve.start = parse(ele.expectedTime);
        eve.end = addHours(parse(ele.expectedTime), 1);
        eve.color = this.users[0].color;
        eve.meta = {
          user: user,
          appointmentDetail: ele
        };
        eve.resizable = {
          beforeStart: true,
          afterEnd: true
        };
        eve.draggable = true;
        this.events.push(eve);
        this.events = [...this.events];
      } else if (ele.typeOfAppointment === 'TREATMENT_BCA') {
        this.bcaPateintList.push(ele);
        this.bcaPateintList = [...this.bcaPateintList];
      }
});
  }
  }
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

getNewJoineeList(){
  this.dashboardService.getNewJoineeList().subscribe((res)=>{
this.rowsNewJoinee = res.document;
this.rowsNewJoineeForFilter = res.document;
console.log(this.rowsNewJoinee);

  },(err)=>{
console.log(err);
  });
}


getCustomerListBySearch(event:any){
  const val = event.target.value.toLowerCase();
    // get the amount of columns in the table
    const colsAmt = 8;
    // get the key names of each column in the dataset
    console.log(this.rowsNewJoineeForFilter[0])
    const keys = Object.keys(this.rowsNewJoineeForFilter[0]);
    // assign filtered matches to the active datatable
    this.rowsNewJoinee = this.rowsNewJoineeForFilter.filter(function(item){
      // iterate through each row's column data
      for (let i = 0; i <   colsAmt; i++) {
        // check for a match
        if(item[keys[i]] !=  null) {
        if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 || !val){
          // found match, return true to add to result set
          return true;
        }
        }
      }
    });
  }
}
