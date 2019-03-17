import { UserService } from './services/userservice/user.service';
import { Component, Input } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Customer Managment',
      url: '/customer',
      icon: 'people'
    },
    {
      title: 'Appointment',
      url: '/appointment',
      icon: 'time'
    }, {
      title: 'Sales/Invoices',
      url: '/sales',
      icon: 'cart'
    }, {
      title: 'Stock Managment',
      url: '/stock',
      icon: 'calculator'
    }, {
      title: 'Reports',
      url: '/reports',
      icon: 'paper'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  
}

