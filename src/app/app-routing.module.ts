import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/invoicing/invoicing.module').then(m => m.InvoicingModule)
  },
  {
    path: 'invoicing',
    loadChildren: () => import('./components/invoicing/invoicing.module').then(m => m.InvoicingModule)
  },
  {
    path: 'driver-pay',
    loadChildren: () => import('./components/driver-pay/driver-pay.module').then(m => m.DriverPayModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
