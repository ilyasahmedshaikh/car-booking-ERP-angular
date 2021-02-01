import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverPayRoutingModule } from './driver-pay-routing.module';
import { DriverPayComponent } from './driver-pay.component';
import { DriverPaySettingsComponent } from './driver-pay-settings/driver-pay-settings.component';
import { DriverPayReportComponent } from './driver-pay-report/driver-pay-report.component';
import { AffiliatePayReportComponent } from './affiliate-pay-report/affiliate-pay-report.component';
import { StaffPayReportComponent } from './staff-pay-report/staff-pay-report.component';


@NgModule({
  declarations: [DriverPayComponent, DriverPaySettingsComponent, DriverPayReportComponent, AffiliatePayReportComponent, StaffPayReportComponent],
  imports: [
    CommonModule,
    DriverPayRoutingModule
  ]
})
export class DriverPayModule { }
