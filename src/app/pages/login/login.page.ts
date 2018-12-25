import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public isWeb: boolean;
  constructor(public plat: Platform, private router: Router) {
    this.isWeb  = this.plat.is('desktop') === true ? true : false;

   }

  ngOnInit() {
  }
  
  authenticateUser(){
    /**
     * Service to be written for Authenticating user
     */
    this.router.navigate(['/dashboard-home']);
  }
}
