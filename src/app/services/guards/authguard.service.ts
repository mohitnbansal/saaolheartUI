import { TOKEN_NAME } from './../constants/auth-constants.service';

import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../userservice/user.service';

import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{

  private jwtHelpService:JwtHelperService;

  constructor(private router: Router, private userService: UserService,private jwtHelp: JwtHelperService) {
this.jwtHelpService = jwtHelp;
 }

 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
  if (this.jwtHelpService.isTokenExpired(TOKEN_NAME, this.userService.accessToken)) {
    return true;
  } else {
    this.router.navigate(['login'], {queryParams: {redirectTo: state.url}});
    return false;
  }
};

}