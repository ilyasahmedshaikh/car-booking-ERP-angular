import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { DriverPayRoutingModule } from './driver-pay-routing.module';
import { DriverPayComponent } from './driver-pay.component';
import { DriverPaySettingsComponent } from './driver-pay-settings/driver-pay-settings.component';
import { DriverPayReportComponent } from './driver-pay-report/driver-pay-report.component';
import { AffiliatePayReportComponent } from './affiliate-pay-report/affiliate-pay-report.component';
import { StaffPayReportComponent } from './staff-pay-report/staff-pay-report.component';
import { PayReportComponent } from './driver-pay-report/pay-report/pay-report.component';
import { PayLogsComponent } from './driver-pay-report/pay-logs/pay-logs.component';


@NgModule({
  declarations: [DriverPayComponent, DriverPaySettingsComponent, DriverPayReportComponent, AffiliatePayReportComponent, StaffPayReportComponent, PayReportComponent, PayLogsComponent],
  imports: [
    CommonModule,
    DriverPayRoutingModule,
    SharedModule
  ]
})
export class DriverPayModule { }
