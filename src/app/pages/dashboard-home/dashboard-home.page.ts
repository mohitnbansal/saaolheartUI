import { DayViewSchedulerComponent } from './../../components/day-view-scheduler/day-view-scheduler.component';
import { FlashMessageService } from './../../services/flash/flash-message.service';
import { MarkAppointmentPage } from './../../components/mark-appointment/mark-appointment.page';
import { ModalController } from '@ionic/angular';
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
    
    this.events = [...this.events];
  }

  userChanged({ event, newUser }) {
     event.color = newUser.color;
     event.meta.user = newUser;
    
     this.events = [...this.events];
  }
 
  constructor(public dashboardService:DashboardService,
    public modalController:ModalController,
    public flashService:FlashMessageService) { 
     
    this.getPateintsQueueList();
    this.dashboardService.callModalEvent.subscribe((res)=>{
     this.presentModal(res);
   });
   
  }
  
  ngOnInit() {
   this.dashboardService.change.subscribe((res)=>{
     this.getPateintsQueueList();
   });
   this.dashboardService.callModalEvent.subscribe((res)=>{

    this.presentModal(res);
  });
  
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

  getPateintsQueueList(){
    this.dashboardService.getPateintsQueueList().subscribe((res)=>{
     
      this.events = []
res.document.forEach((ele,ind) => {
let user = {};
this.users.forEach((use)=>{
  if(use.id === ele.machineNo){
    user = use;
  }
});
let  eve: CalendarEvent = <CalendarEvent>{};
eve.title = ele.customerName;
 //eve.start = addHours(startOfDay(ele.expectedTime), getTime(ele.expectedTime));
 if(ele.isVisitDone === 'Completed'){
   eve.cssClass  = 'strike';
 }
eve.start = parse(ele.expectedTime) ;
eve.end = addHours(parse(ele.expectedTime),1) ;
eve.color =  this.users[0].color;
eve.meta =  {
user: user,
appointmentDetail: ele
            };
eve.resizable =  {
   beforeStart: true,
   afterEnd: true
 };
eve.draggable = true;
this.events.push(eve);
this.events = [...this.events];
});
this.refresh.next();

    },(err)=>{
      console.log(err);
    });
  }
 
}
