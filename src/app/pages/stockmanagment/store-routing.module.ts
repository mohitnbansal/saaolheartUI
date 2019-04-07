import { StockSalesResolveService } from './../../services/stock/stock-sales-resolve.service';
import { StockDetailsResolveService } from './../../services/stock/stock-details-resolve.service';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorePage } from './store.page';


const routes: Routes = [
  {
   path: '',
   component: StorePage,
   children: [
     {
       path: '',
       pathMatch: 'full',
       redirectTo: 'newstock'
   },
     {
       path: 'newstock',
       children: [
         {
           path: '',
           loadChildren: './new-stock/new-stock.module#NewStockPageModule'
         },
         
       ]
     }
     ,
     {
       path: 'searchstock',
       children: [
         {
           path: '',
           loadChildren: './update-stock-items/update-stock-items.module#UpdateStockItemsPageModule'
         },
         
       ]
     },
     { path: 'details',
     children: [
      {
        path: ':id',
         loadChildren: './stock-details/stock-details.module#StockDetailsPageModule' ,
         resolve: {
          data: StockDetailsResolveService,
          stockSales: StockSalesResolveService
            }
       }
    ]
  }
   ]
 },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
