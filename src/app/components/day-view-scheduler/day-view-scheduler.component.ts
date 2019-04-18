import { FlashMessageService } from './../../services/flash/flash-message.service';
import { MarkAppointmentPage } from './../mark-appointment/mark-appointment.page';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { DashboardService } from './../../services/dashboard/dashboard.service';
import { AlertController, ModalController, AngularDelegate } from '@ionic/angular';
import { Component, EventEmitter, Injectable, Output, Injector, ComponentFactoryResolver, AfterContentInit } from '@angular/core';
import { CalendarDayViewComponent, CalendarUtils, DateAdapter } from 'angular-calendar';
import { DayView, DayViewEvent, GetDayViewArgs } from 'calendar-utils';
import { colors } from 'src/app/utils/color';
import { ReflectiveInjector } from '@angular/core';
const EVENT_WIDTH = 150;

// extend the interface to add the array of users
interface DayViewScheduler extends DayView {
  users: any[];
}

import { async } from 'q';
import { OverlayBaseController } from '@ionic/angular/dist/util/overlay';

@Injectable()
export class DayViewSchedulerCalendarUtils extends CalendarUtils {
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
      color: colors.yellow
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

  getDayView(args: GetDayViewArgs): DayViewScheduler {
    const view: DayViewScheduler = {
      ...super.getDayView(args),
      users: []
    };

    //  view.events.forEach(({ event }) => {
    //   // assumes user objects are the same references,
    //   // if 2 users have the same structure but different object references this will fail
      
    //   if (!view.users.includes(event.meta.user)) {
    //     view.users.push(event.meta.user);
    //   }
    // });
    this.users.forEach((user)=>{
      if (!view.users.includes(user)) {
        view.users.push(user);
      }
    })
    // sort the users by their names
   // view.users.sort((user1, user2) => user1.name.localeCompare(user2.name));
    view.events = view.events.map(dayViewEvent => {
      let index ;
      
      this.users.forEach((user,ind)=>{
if(user.id===dayViewEvent.event.meta.user.id)
{
index = ind;
}
      });
     // const index = view.users.indexOf(dayViewEvent.event.meta.user);
      dayViewEvent.left = index * EVENT_WIDTH; // change the column of the event
      return dayViewEvent;
    });
    view.width = view.users.length * EVENT_WIDTH;
    return view;
  }
}

@Component({
  // tslint:disable-line max-classes-per-file
  selector: 'mwl-day-view-scheduler',
  styles: [
    `
      .day-view-column-headers {
        display: flex;
        margin-left: 70px;
      }
      .day-view-column-header {
        width: 150px;
        border: solid 1px black;
        text-align: center;
      }
      .strike {
        background: repeating-linear-gradient(
            45deg !important,
            #606dbc !important,
            #606dbc 10px !important,
            #465298 10px !important,
            #465298 20px !important
          );
    }
    `
  ],
  providers: [
    {
      provide: CalendarUtils,
      useClass: DayViewSchedulerCalendarUtils
    },DashboardService
  ],
  templateUrl: 'day-view-scheduler.component.html'
})
export class DayViewSchedulerComponent extends CalendarDayViewComponent
 {
  view: DayViewScheduler;
  public alertController:AlertController;
  public dashboardService: DashboardService;
  public httpClient: HttpClient;
  public httpHandler: HttpHandler;


  public flashService:FlashMessageService;

  @Output() userChanged = new EventEmitter();

  @Output() public newChange = new EventEmitter();
  ngOnInit()
  {
    console.log(this.eventTemplate);
  this.alertController = new AlertController();
this.httpClient = new HttpClient(this.httpHandler);
this.dashboardService = new DashboardService(this.httpClient);
this.flashService = new FlashMessageService();
}

  getEvent(eventDay: any) 
  {
    
      this.newChange.emit(eventDay);
  }


  eventDragged(dayEvent: DayViewEvent, xPixels: number, yPixels: number): void {
    if (yPixels !== 0) {

     
      super.dragEnded(dayEvent, { y: yPixels, x: 0 } as any); // original behaviour
     
    }
    if (xPixels !== 0) {
      const columnsMoved = xPixels / EVENT_WIDTH;
      let currentColumnIndex ;
      // const currentColumnIndex = this.view.users.findIndex(
      //   user => user.id === dayEvent.event.meta.user.id
      // );
      this.view.users.forEach((user,ind)=>{
  
        if(user.id===dayEvent.event.meta.user.id){
          currentColumnIndex = ind;
        }});
     
      const newIndex = currentColumnIndex + columnsMoved === -1 ? 0 : currentColumnIndex + columnsMoved;
      
      const newUser = this.view.users[newIndex];
      /*
      *Check if any event already exist 
      */
     
console.log(dayEvent)
      if (newUser) {
        this.userChanged.emit({ event: dayEvent.event, newUser });
      }
    }
  }
 }