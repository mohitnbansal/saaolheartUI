import { AppComponent } from './app.component';
import { AuthGuard } from './services/guard/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule'},

  { path: 'home',
   loadChildren: './pages/dashboard-home/dashboard-home.module#DashboardHomePageModule' ,
  canActivate: [AuthGuard]
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
  { path: 'stock-quantity', loadChildren: './components/stock-quantity/stock-quantity.module#StockQuantityPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
