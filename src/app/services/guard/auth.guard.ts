import { JwtHelperService } from '@auth0/angular-jwt';
import { TOKEN_NAME } from './../constants/auth-constants.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../userservice/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService, private jwtHelp: JwtHelperService) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log(this.jwtHelp.isTokenExpired(this.userService.accessToken))
       if (!this.jwtHelp.isTokenExpired(this.userService.accessToken)) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }}
}
