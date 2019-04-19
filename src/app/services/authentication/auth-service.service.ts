import { TOKEN_AUTH_USERNAME, TOKEN_AUTH_PASSWORD } from './../constants/auth-constants.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscribable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  static AUTH_TOKEN = 'http://localhost:8082/oauth/token';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<any> {
    const body = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&grant_type=password`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD)
        })
      };

        return this.http.post<any>(environment.apiUrl + 'oauth/token', body, httpOptions);
  //   .subscribe((res: any) => {
  //     console.log(res);
  //     if (res.access_token) {
  //       return res.access_token;
  //     }
  //     return null;
  //   });
  // }
}


}
