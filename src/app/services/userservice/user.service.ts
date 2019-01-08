import { JwtHelperService } from '@auth0/angular-jwt';
import { TOKEN_NAME } from './../constants/auth-constants.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  jwtHelper: JwtHelperService = new JwtHelperService();
  public accessToken: string = null;
  isAdmin: boolean;

  constructor() {
  }

  login(accessToken: string) {
    const decodedToken = this.jwtHelper.decodeToken(accessToken);
    console.log(decodedToken);

    this.isAdmin = decodedToken.authorities.some(el => el === 'ADMIN_USER');
    this.accessToken = accessToken;

    localStorage.setItem(TOKEN_NAME, accessToken);
  }

  logout() {
    this.accessToken = null;
    this.isAdmin = false;
    localStorage.removeItem(TOKEN_NAME);
  }

  isAdminUser(): boolean {
    return this.isAdmin;
  }

  isUser(): boolean {
    console.log( this.accessToken != null);
    return this.accessToken != null;
  }
}
