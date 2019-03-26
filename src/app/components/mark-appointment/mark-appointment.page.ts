import { FlashMessageService } from './../../services/flash/flash-message.service';
import { NavParams, ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mark-appointment',
  templateUrl: './mark-appointment.page.html',
  styleUrls: ['./mark-appointment.page.scss'],
})
export class MarkAppointmentPage implements OnInit {

  @Input() public isVisitDone: string;
  @Input() public duration: number;
  @Input() public complaints: string;
  modalController:ModalController;
    constructor(public modalCtrl: ModalController,
       public flasService:FlashMessageService) { 

        this.modalController = this.modalCtrl;
       }
  
  ngOnInit() {
  }

  closeModel() {
    if(this.isVisitDone != null && this.duration != null && this.complaints!=null){
    const dat = {isVisitDone: this.isVisitDone,
      duration : this.duration, complaints :this.complaints}
    this.modalCtrl.dismiss(dat);
    }else{
          this.flasService.show('Please enter all data related to Update',4000);
    }
  }
}
