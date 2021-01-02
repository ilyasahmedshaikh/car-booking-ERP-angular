import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  ELEMENT_DATA: any = [
    {add: false, accounts: 'Accounts, Payable - Test Limo Sean', create_invoice: 'Create Invoice', trips: '1'},
    {add: false, accounts: 'Deaon Comapny - Accounts, Payable', create_invoice: 'Create Invoice', trips: '9'},
    {add: false, accounts: 'Accounts, Payable - Lurey Jeffry CO', create_invoice: 'Create Invoice', trips: '5'},
    {add: false, accounts: 'SE Eagles Corporation - Accounts, Payable', create_invoice: 'Create Invoice', trips: '0'},
    {add: false, accounts: 'Accounts, Payable - Test Limo Sean', create_invoice: 'Create Invoice', trips: '1'},
    {add: false, accounts: 'Deaon Comapny - Accounts, Payable', create_invoice: 'Create Invoice', trips: '9'},
  ];

  displayedColumns: string[] = ['add', 'accounts', 'create_invoice', 'trips'];
  dataSource = this.ELEMENT_DATA;

  ELEMENT_DATA1: any = [
    {checkbox: false, conf: 132, pickup_date_time: '2/09/2020 10:40 PM', passenger: 'John Michael', driver: 'Joe Henz', car: 'Car', po_client_ref: '', total_dues: '7849'},
    {checkbox: false, conf: 234, pickup_date_time: '10/05/2020 08:30 AM', passenger: 'Allexendra Sio', driver: 'Kendic Martel', car: 'Car', po_client_ref: '', total_dues: '1503'},
    {checkbox: false, conf: 454, pickup_date_time: '15/11/2020 12:05 AM', passenger: 'Charlie', driver: 'Maxwell Dyrn', car: 'Car', po_client_ref: '', total_dues: '2695'},
    {checkbox: false, conf: 132, pickup_date_time: '2/09/2020 10:40 PM', passenger: 'John Michael', driver: 'Joe Henz', car: 'Car', po_client_ref: '', total_dues: '7849'},
  ];

  displayedColumns1: string[] = ['checkbox', 'conf', 'pickup_date_time', 'passenger', 'driver', 'car', 'po_client_ref', 'total_dues'];
  dataSource1 = this.ELEMENT_DATA1;

  constructor() { }

  ngOnInit(): void {
  }

}
