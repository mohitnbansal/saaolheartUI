import { AuthServiceService } from './../../services/authentication/auth-service.service';
import { Platform, MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/userservice/user.service';
import { FormGroup, FormBuilder, Validators ,ReactiveFormsModule} from '@angular/forms';
import { MustMatch } from 'src/app/helper/must-match.validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public isWeb: boolean;
  model: any = {};
  loading = false;
  error = '';
  redirectUrl: string;
  public loginForm: FormGroup;

  constructor(public plat: Platform, private router: Router,
    private activatedRoute: ActivatedRoute,
    private authenticationService: AuthServiceService,
    private userService: UserService,
    public formBuilder: FormBuilder,
    public react: ReactiveFormsModule,
    private menu: MenuController) {
    this.isWeb  = this.plat.is('desktop') === true ? true : false;
    this.redirectUrl = this.activatedRoute.snapshot.queryParams['redirectTo'];

   }

  ngOnInit() {

    this.userService.logout();

    this.loginForm = this.formBuilder.group({
      userName: [],
      password: ['', [Validators.required, Validators.minLength(3)]],
  //     confirmPassword: ['', Validators.required]
  // }, {
  //     validator: MustMatch('password', 'confirmPassword')
  //     
    });
  }
 
  login() {
    
    console.log( this.loginForm);
    this.loading = true;
const userN = this.loginForm.get('userName').value;
const pass = this.loginForm.get('password').value;
    this.authenticationService.login(userN,pass)
      .subscribe(
        result => {
          this.loading = false;

          if (result.access_token) {
            this.userService.login(result.access_token);
            this.navigateAfterSuccess();
          } else {
            this.error = 'Username or password is incorrect';
          }
        },
        error => {
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      );
  }

  private navigateAfterSuccess() {
    console.log(this.redirectUrl);
    if (this.redirectUrl) {
     // this.router.navigateByUrl(this.redirectUrl);
    } else {
      this.router.navigate(['home']);
    }
  }

  ionViewDidEnter() {
   // this.menu.enable(false);

    // If you have more than one side menu, use the id like below
     this.menu.enable(false);
  }

  ionViewWillLeave() {
    // Don't forget to return the swipe to normal, otherwise 
    // the rest of the pages won't be able to swipe to open menu
    this.menu.enable(true);

    // If you have more than one side menu, use the id like below
    // this.menu.swipeEnable(true, 'menu1');
   }
  
}
