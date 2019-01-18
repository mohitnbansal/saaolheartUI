import { CustomerPage } from './customer.page';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CustomerDetailsService } from 'src/app/services/customer/customer-details.service';



const routes: Routes = [
   {
    path: '',
    component: CustomerPage,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'search'
    },
      {
        path: 'details',
        children: [
          {
            path: '',
            loadChildren: './customer-details/customer-details.module#CustomerDetailsPageModule'
          },
          {
            path: ':id',
            loadChildren: './customer-details/customer-details.module#CustomerDetailsPageModule',
            resolve:{
              data: CustomerDetailsService
            }
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
      },
      { path: 'search', loadChildren: './customer-search/customer-search.module#CustomerSearchPageModule' }

    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
