import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicingRoutingModule } from './invoicing-routing.module';
import { InvoicingComponent } from './invoicing.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { OutstandingComponent } from './outstanding/outstanding.component';
import { PaidComponent } from './paid/paid.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [InvoicingComponent, InvoicesComponent, OutstandingComponent, PaidComponent, SettingsComponent],
  imports: [
    CommonModule,
    InvoicingRoutingModule
  ]
})
export class InvoicingModule { }
