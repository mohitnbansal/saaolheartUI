import { InvoiceMasterService } from './../../services/master/invoice-master.service';
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
              data: CustomerDetailsService,
              invoiceType: InvoiceMasterService
            }
          }
        ]
      },
       { path: 'register',
        children: [
          {
            path: '',
            loadChildren: './customer-registration/customer-registration.module#CustomerRegistrationPageModule'
          },
          {
            path: ':id',
            loadChildren: './customer-registration/customer-registration.module#CustomerRegistrationPageModule'
           , resolve: {
              data: CustomerDetailsService,
            }
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
