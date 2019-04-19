import { DashboardLowStockResolveService } from './services/dashboard/dashboard-low-stock-resolve.service';
import { DashboardPendingPaymentResolveService } from './services/dashboard/dashboard-pending-payment-resolve.service';
import { DasboardResolveService } from './services/dashboard/dasboard-resolve.service';
import { AppComponent } from './app.component';
import { AuthGuard } from './services/guard/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardService } from './services/dashboard/dashboard.service';
import { DashboardBCADataResolveService } from './services/dashboard/dashboard-bcadata-resolve.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule'},

  { path: 'home',
   loadChildren: './pages/dashboard-home/dashboard-home.module#DashboardHomePageModule' ,
  canActivate: [AuthGuard],
  resolve:{
    data: DasboardResolveService,
    patientQue: DashboardBCADataResolveService ,
    patientPendingList: DashboardPendingPaymentResolveService,
    lowStock: DashboardLowStockResolveService
  }
},
  { path: 'customer', loadChildren: './pages/customer/customer.module#CustomerPageModule',
 // canActivate: [AuthGuard] 
},
  { path: 'appointment', loadChildren: './pages/appointment/appointment.module#AppointmentPageModule' ,
 // canActivate: [AuthGuard]
},
  { path: 'sales', loadChildren: './pages/sales/sales.module#SalesPageModule' ,
 // canActivate: [AuthGuard]
},
  { path: 'stock', loadChildren: './pages/stockmanagment/store.module#StorePageModule' ,
  canActivate: [AuthGuard]
},
  { path: 'reports', loadChildren: './pages/reports/reports.module#ReportsPageModule' },
  { path: 'stock-quantity', loadChildren: './components/stock-quantity/stock-quantity.module#StockQuantityPageModule' },
  { path: 'customer-appointment', loadChildren: './components/customer-appointment/customer-appointment.module#CustomerAppointmentPageModule' },
  { path: 'mark-appointment', loadChildren: './components/mark-appointment/mark-appointment.module#MarkAppointmentPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
