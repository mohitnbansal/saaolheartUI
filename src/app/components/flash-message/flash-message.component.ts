import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FlashMessageService } from 'src/app/services/flash/flash-message.service';
@Component({
  selector: 'app-flash-message',
  templateUrl: './flash-message.component.html',
  styleUrls: ['./flash-message.component.scss'],
  animations: [
    trigger('messageState', [
        transition('void => *', [
            style({transform: 'translateY(-100%)'}),
            animate('200ms ease-out')
        ]),
        transition('* => void', [
            animate('200ms ease-in', style({opacity: '0'}))
        ])
    ])
]
})
export class FlashMessageComponent implements OnInit {

  activeGreen = false;
  activeRed = false;
  message : any[] = [];

  constructor(public flashProvider: FlashMessageService) { 
    
   }
   ngOnInit() {
    this.flashProvider.showRed = this.showRed.bind(this);
    this.flashProvider.showGreen = this.showGreen.bind(this);

    this.flashProvider.hide = this.hide.bind(this);
  }

  showGreen(message, duration) {

    this.message = message;
    this.activeGreen = true;

    setTimeout(() => {
        this.activeGreen = false;
    }, duration);

}

  showRed(message, duration) {

      this.message = message;
      this.activeRed = true;

      setTimeout(() => {
          this.activeRed = false;
      }, duration);

  }

  hide() {
      this.activeRed = false;
      this.activeGreen = false;
  }
}
