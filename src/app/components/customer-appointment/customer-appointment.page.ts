import { FlashMessageService } from './../../services/flash/flash-message.service';
import { NavParams, ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer-appointment',
  templateUrl: './customer-appointment.page.html',
  styleUrls: ['./customer-appointment.page.scss'],
})
export class CustomerAppointmentPage implements OnInit {
public dt:Date = new Date();
@Input() public appointmentType: string;
@Input() public appointmentDate: any = new Date( this.dt.getFullYear(), this.dt.getMonth(),this.dt.getDate(),
 9, 30);
@Input() public description: any;
@Input() public expectedTime: any;
@Input() public machineNo:number;
  constructor(navParams: NavParams, public modalCtrl: ModalController,
     public flasService:FlashMessageService) { }

  ngOnInit() {
  }

openDate(){
/*
  this.datePicker.show({
    date: new Date(),
    mode: 'date',
    androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
  }).then(
    date => console.log('Got date: ', date),
    err => console.log('Error occurred while getting date: ', err)
    https://www.logisticinfotech.com/blog/ionic4-datepicker-component/
  );*/
}


  closeModel() {
    if(this.appointmentType != null && this.appointmentDate != null && this.description!=null){
    const dat = {appointmentType: this.appointmentType,
       appointmentDate : this.appointmentDate, description :this.description,machineNo:this.machineNo}
    this.modalCtrl.dismiss(dat);
    }else{
          this.flasService.showRed('Please enter all data related to Appointment',4000);
    }
  }
 
}
