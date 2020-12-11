import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  items: any = [
    { icon: 'file_copy', name: 'invoices', route: '/invoicing/invoices' },
    { icon: 'file_copy', name: 'outstanding', route: '/invoicing/outstanding' },
    { icon: 'file_copy', name: 'paid', route: '/invoicing/paid' },
    { icon: 'build', name: 'settings', route: '/invoicing/settings' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
