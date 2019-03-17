import { SalesPage } from './sales.page';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


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
}
   ]
 },
  { path: 'search-sales', loadChildren: './search-sales/search-sales.module#SearchSalesPageModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
