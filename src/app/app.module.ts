import { PipesModule } from './pipes/pipes.module';
import { HeaderComponent } from './components/header/header.component';
import { DashboardService } from './services/dashboard/dashboard.service';
import { MarkAppointmentPageModule } from './components/mark-appointment/mark-appointment.module';
import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentModule } from './components/component.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { IonicSelectableModule } from 'ionic-selectable';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { StockQuantityPageModule } from './components/stock-quantity/stock-quantity.module';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { CustomerAppointmentPageModule } from './components/customer-appointment/customer-appointment.module';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { OwlDialogModule } from 'ng-pick-datetime/dialog';
import { AadharTranformPipe } from './pipes/aadhar/aadhar-tranform.pipe';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}
@NgModule({
  declarations: [AppComponent],
  entryComponents: [HeaderComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,    
    NgxDatatableModule,
    HttpClientModule,
    IonicSelectableModule,
    CalendarModule,
    MarkAppointmentPageModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['http://localhost:8082', 'localhost:8082', 'localhost'],
      // blacklistedRoutes: ['example.com/examplebadroute/']
      }
    }),
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    BrowserAnimationsModule,
    ComponentModule,
    StockQuantityPageModule,
    CustomerAppointmentPageModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    OwlDialogModule,
    PipesModule
  ],
  exports:[],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
