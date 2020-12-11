import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoicingComponent } from './invoicing.component';

import { InvoicesComponent } from './invoices/invoices.component';
import { OutstandingComponent } from './outstanding/outstanding.component';
import { PaidComponent } from './paid/paid.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { 
    path: '', 
    component: InvoicingComponent,
    children: [
      { path: '', component: InvoicesComponent },
      { path: 'invoices', component: InvoicesComponent },
      { path: 'outstanding', component: OutstandingComponent },
      { path: 'paid', component: PaidComponent },
      { path: 'settings', component: SettingsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicingRoutingModule { }
