import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { InvoicingRoutingModule } from './invoicing-routing.module';
import { InvoicingComponent } from './invoicing.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { OutstandingComponent } from './outstanding/outstanding.component';
import { PaidComponent } from './paid/paid.component';
import { SettingsComponent } from './settings/settings.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { CreateInvoicesComponent } from './create-invoice/create-invoices/create-invoices.component';
import { SettingsTabComponent } from './settings/settings-tab/settings-tab.component';
import { GenerateInvoiceComponent } from './generate-invoice/generate-invoice.component';
import { AddTripsInvoiceComponent } from './add-trips-invoice/add-trips-invoice.component';
import { RecordPaymentComponent } from './record-payment/record-payment.component';


@NgModule({
  declarations: [InvoicingComponent, InvoicesComponent, OutstandingComponent, PaidComponent, SettingsComponent, CreateInvoiceComponent, CreateInvoicesComponent, SettingsTabComponent, GenerateInvoiceComponent, AddTripsInvoiceComponent, RecordPaymentComponent],
  imports: [
    CommonModule,
    InvoicingRoutingModule,
    SharedModule
  ]
})
export class InvoicingModule { }
