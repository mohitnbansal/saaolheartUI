import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },

  { path: 'home', loadChildren: './pages/dashboard-home/dashboard-home.module#DashboardHomePageModule' },
  { path: 'customer', loadChildren: './pages/customer/customer.module#CustomerPageModule' },
  { path: 'appointment', loadChildren: './pages/appointment/appointment.module#AppointmentPageModule' },
  { path: 'inventory', loadChildren: './pages/inventory/inventory.module#InventoryPageModule' },
  { path: 'sales', loadChildren: './pages/sales/sales.module#SalesPageModule' },
  { path: 'store', loadChildren: './pages/store/store.module#StorePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
