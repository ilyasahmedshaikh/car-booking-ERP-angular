import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoicingComponent } from './invoicing.component';

import { InvoicesComponent } from './invoices/invoices.component';
import { OutstandingComponent } from './outstanding/outstanding.component';
import { PaidComponent } from './paid/paid.component';
import { SettingsComponent } from './settings/settings.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { GenerateInvoiceComponent } from './generate-invoice/generate-invoice.component';
import { AddTripsInvoiceComponent } from './add-trips-invoice/add-trips-invoice.component';
import { RecordPaymentComponent } from './record-payment/record-payment.component';

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
      { path: 'create-invoice', component: CreateInvoiceComponent },
      { path: 'generate-invoice', component: GenerateInvoiceComponent },
      { path: 'add-trips-invoice', component: AddTripsInvoiceComponent },
      { path: 'record-payment', component: RecordPaymentComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicingRoutingModule { }
