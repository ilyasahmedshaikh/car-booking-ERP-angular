import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  items: any = [
    { icon: 'file_copy', name: 'invoices', route: '/invoicing/invoices' },
    // { icon: 'style', name: 'record Payment', route: '/invoicing/record-payment' },
    { icon: 'content_paste', name: 'outstanding', route: '/invoicing/outstanding' },
    { icon: 'local_atm', name: 'paid', route: '/invoicing/paid' },
    { icon: 'build', name: 'settings', route: '/invoicing/settings' },
  ]

  driverItems: any = [
    { icon: 'build', name: 'driver pay settings', route: '/driver-pay/driver-pay-settings' },
    { icon: 'content_paste', name: 'driver pay report', route: '/driver-pay/driver-pay-report' },
    { icon: 'content_paste', name: 'affiliate pay report', route: '/driver-pay/affiliate-pay-report' },
    { icon: 'content_paste', name: 'staff pay report', route: '/driver-pay/staff-pay-report' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
