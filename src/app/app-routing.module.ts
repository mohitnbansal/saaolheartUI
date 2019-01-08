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
  { path: 'login',loadChildren: './pages/login/login.module#LoginPageModule'},

  { path: 'home',
   loadChildren: './pages/dashboard-home/dashboard-home.module#DashboardHomePageModule' ,
  canActivate: [AuthGuard]},
  { path: 'customer', loadChildren: './pages/customer/customer.module#CustomerPageModule',
  canActivate: [AuthGuard] },
  { path: 'appointment', loadChildren: './pages/appointment/appointment.module#AppointmentPageModule' ,
  canActivate: [AuthGuard]},
  { path: 'inventory', loadChildren: './pages/inventory/inventory.module#InventoryPageModule' },
  { path: 'sales', loadChildren: './pages/sales/sales.module#SalesPageModule' ,
  canActivate: [AuthGuard]},
  { path: 'store', loadChildren: './pages/store/store.module#StorePageModule' ,
  canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
