import { CustomerPage } from './customer.page';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';



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
