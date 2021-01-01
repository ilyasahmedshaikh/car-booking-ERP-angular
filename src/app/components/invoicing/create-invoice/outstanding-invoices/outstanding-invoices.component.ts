import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outstanding-invoices',
  templateUrl: './outstanding-invoices.component.html',
  styleUrls: ['./outstanding-invoices.component.scss']
})
export class OutstandingInvoicesComponent implements OnInit {

  ELEMENT_DATA: any = [
    {checkbox: false, invoice: 132, billing_contact: 'Doug Pederson', company: 'Eagles Corporation', bill_date: '2/09/2020', due_date: '2/09/2020', status: '15 days overdue', finalized: '', total: '450', outstanding: '100', actions: ''},
    {checkbox: false, invoice: 234, billing_contact: 'Payable Accounts', company: 'Dawlance Company', bill_date: '10/05/2020', due_date: '10/05/2020', status: '30 days overdue', finalized: '', total: '1100', outstanding: '200', actions: ''},
    {checkbox: false, invoice: 454, billing_contact: 'Ben issa Mohamed', company: 'Honda Company', bill_date: '15/11/2020', due_date: '15/11/2020', status: '45 days overdue', finalized: '', total: '890', outstanding: '190', actions: ''},
    {checkbox: false, invoice: 675, billing_contact: 'Biling Contact CC', company: 'Edifier Co.', bill_date: '22/12/2019', due_date: '22/12/2019', status: '125 days overdue', finalized: '', total: '2500', outstanding: '500', actions: ''},
    {checkbox: false, invoice: 100, billing_contact: 'Kiff Kingsburry', company: 'Logon Corporation', bill_date: '14/02/2019', due_date: '14/02/2019', status: '252 days overdue', finalized: '', total: '300', outstanding: '150', actions: ''},
  ];

  displayedColumns: string[] = ['checkbox', 'invoice', 'billing_contact', 'company', 'bill_date', 'due_date', 'status', 'finalized', 'total', 'outstanding', 'actions'];
  dataSource = this.ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
