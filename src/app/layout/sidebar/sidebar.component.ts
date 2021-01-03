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

  constructor() { }

  ngOnInit(): void {
  }

}
