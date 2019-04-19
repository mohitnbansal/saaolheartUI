import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-toolpop',
  templateUrl: './toolpop.component.html',
  styleUrls: ['./toolpop.component.scss'],
})
export class ToolpopComponent implements OnInit, OnChanges {
  public appPages = [
    {
      title: 'Settings',
      url: '#',
      icon: 'settings'
    },
    {
      title: 'Logout',
      url: '/login',
      icon: 'log-out'
    }
    
  ];
  constructor(public popoverController: PopoverController,
    public route:Router,
    public userService:UserService) { }

  ngOnInit() {}
  closeModel(str: any) {
    console.log(str)
    
    this.route.navigateByUrl(str);

    this.popoverController.dismiss();
    }
    ngOnChanges(){
      alert(2)
    }
   
}
