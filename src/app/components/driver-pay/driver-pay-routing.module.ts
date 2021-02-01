import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriverPayComponent } from './driver-pay.component';
import { DriverPaySettingsComponent } from './driver-pay-settings/driver-pay-settings.component';
import { DriverPayReportComponent } from './driver-pay-report/driver-pay-report.component';
import { AffiliatePayReportComponent } from './affiliate-pay-report/affiliate-pay-report.component';
import { StaffPayReportComponent } from './staff-pay-report/staff-pay-report.component';


const routes: Routes = [
  { 
    path: '', 
    component: DriverPayComponent,
    children: [
      { path: '', component: DriverPaySettingsComponent },
      { path: 'driver-pay-settings', component: DriverPaySettingsComponent },
      { path: 'driver-pay-report', component: DriverPayReportComponent },
      { path: 'affiliate-pay-report', component: AffiliatePayReportComponent },
      { path: 'staff-pay-report', component: StaffPayReportComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverPayRoutingModule { }
