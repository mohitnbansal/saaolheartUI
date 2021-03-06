import { DashboardService } from './../../services/dashboard/dashboard.service';
import { Appointment } from './../../interfaces/appointment';
import { ModalController } from '@ionic/angular';
import { FlashMessageService } from 'src/app/services/flash/flash-message.service';
import { CustomerService } from './../../services/customer/customer.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SalesService } from 'src/app/services/sales/sales.service';
import { CustomerAppointmentPage } from '../customer-appointment/customer-appointment.page';

@Component({
  selector: 'app-search-update-schedule',
  templateUrl: './search-update-schedule.component.html',
  styleUrls: ['./search-update-schedule.component.scss']
})
export class SearchUpdateScheduleComponent implements OnInit {
  public customerList: any;
  public customerDbObj:any = [];
  @Input() public customerString: string;
  @Output() updateSchedule: EventEmitter<any> = new EventEmitter();
  public appointment:Appointment = <Appointment>{};
  constructor(public customerService: CustomerService,

    public salesService: SalesService,
    public flashService: FlashMessageService,
    public modalController: ModalController,
    public dashboardService:DashboardService) { }

  ngOnInit() {
  }

  getCustomerListBySearch(event: any) {
    console.log(event.target.value)
    if(event.target.value !== '') {
this.customerService.getCustomerListByNameOrMobile(event.target.value).subscribe((res)=>{
  this.customerList = res;
 
  console.log(res);
},
(err) => {
  delete this.customerList;
 
  console.log(err);
});
} else{
  
  delete this.customerList;
  
}
  }

  getCustomerDetails(ev: any) {
    console.log(ev.target.value);
    this.customerService.getCustomerById(ev.target.value).subscribe((res) => {
      this.customerDbObj = res;
    this.appointment.customerId = res.id;
    console.log(res)
    }, (err) => {
    console.log(err);
    });
    
    this.customerString = '';
    delete this.customerList;

    this.presentModal();
  }


  async presentModal() {
   
    const modal = await this.modalController.create({
      component: CustomerAppointmentPage,
      cssClass: 'my-custom-modal-css',
      componentProps: { 
        customerName:  this.customerDbObj, lastName :this.customerDbObj}
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    console.log(data);
    /**
     * Save the detail to server and update the Customer Appointment and referesh
     */
this.appointment.expectedTime = data.appointmentDate ;
this.appointment.typeOfAppointmentString = data.appointmentType;
this.appointment.visitingForDescription = data.description;
this.appointment.machineNo= Number(data.machineNo);
console.log(this.appointment);
this.dashboardService.addAppointment(this.appointment).subscribe((res)=>{
  console.log(res);
  this.getEvent();
  // this.dashboardService.change.emit(res);
  //Flash serveice Message
  this.flashService.showGreen(res.error,5000);
},(err)=>{
  console.log(err);
  this.flashService.showRed(err.error.error,8000);
});
  }

  
  getEvent() 
  {
      this.updateSchedule.emit();
  }
}
