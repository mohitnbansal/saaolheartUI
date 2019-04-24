import { Observable } from 'rxjs';
import { LoaderService } from './loader.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptorService implements HttpInterceptor {
  constructor(private loaderService: LoaderService,
    public route: Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.showLoader();
    return next.handle(req).pipe(tap((event: HttpEvent<any>) => { 
      if (event instanceof HttpResponse) {
        this.onEnd();
      }
    },
      (err: any) => {
        if(err instanceof HttpErrorResponse){
          console.log(err);
            if(err.error.error === 'invalid_token' && err.status === 401 ){
              this.onEnd();
              // const err = [];
              // err.push('Session Exprired , Kindly Relogin');
              // this.flashmessage.showRed(err, 4000);
              this.route.navigateByUrl('/login', { replaceUrl: true });
            }
  
        }
        this.onEnd();
    }));
  }
  private onEnd(): void {
    this.hideLoader();
  }
  private showLoader(): void {
    this.loaderService.show();
  }
  private hideLoader(): void {
    this.loaderService.hide();
  }
}
