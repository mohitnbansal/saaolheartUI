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

  active = false;
  message = '';

  constructor(public flashProvider: FlashMessageService) { 
    
   }

  ngOnInit() {
    this.flashProvider.show = this.show.bind(this);
    this.flashProvider.hide = this.hide.bind(this);
  }

  show(message, duration) {

      this.message = message;
      this.active = true;

      setTimeout(() => {
          this.active = false;
      }, duration);

  }

  hide() {
      this.active = false;
  }

}
