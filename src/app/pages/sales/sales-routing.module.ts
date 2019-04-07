import { SalesListResolveService } from './../../services/sales/sales-list-resolve.service';
import { SalesPage } from './sales.page';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesDetailsResolveService } from 'src/app/services/sales/sales-details-resolve.service';


const routes: Routes = [
  {
   path: '',
   component: SalesPage,
   children: [
     {
       path: '',
       pathMatch: 'full',
       redirectTo: 'newsales'
   },
   { path: 'newsales',
   children: [
    {
      path: '',
      loadChildren: './new-sales/new-sales.module#NewSalesPageModule'
     }
  ]
},
{ path: 'getallsales',
children: [
 {
   path: '',
   loadChildren: './search-sales/search-sales.module#SearchSalesPageModule',
   resolve:{
     dataList: SalesListResolveService
   }
  }
]
},
{ path: 'salesdetails',
children: [
 {
  path: ':id',
   loadChildren: './sales-details/sales-details.module#SalesDetailsPageModule',
   resolve:{
     dataDetails: SalesDetailsResolveService
   }
  }
]
}
   ]
 },
  { path: 'sales-details', loadChildren: './sales-details/sales-details.module#SalesDetailsPageModule' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
