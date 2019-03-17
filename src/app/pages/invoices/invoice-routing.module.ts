import { InvoicesPage } from './invoices.page';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {
   path: '',
   component: InvoicesPage,
   children: [
     {
       path: '',
       pathMatch: 'full',
       redirectTo: 'newsales'
   }
   ]
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
