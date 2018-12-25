import { CustomerPage } from './customer.page';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';



const routes: Routes = [
   {
    path: '',
    component: CustomerPage,
    children: [
      {
        path: 'details',
        children: [
          {
            path: '',
            loadChildren: './customer-details/customer-details.module#CustomerDetailsPageModule'
          }
        ]
      },
       { path: 'register',
        children: [
          {
            path: '',
            loadChildren: './customer-registration/customer-registration.module#CustomerRegistrationPageModule'
          }
        ]
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
