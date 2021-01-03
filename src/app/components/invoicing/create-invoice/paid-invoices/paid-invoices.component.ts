import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paid-invoices',
  templateUrl: './paid-invoices.component.html',
  styleUrls: ['./paid-invoices.component.scss']
})
export class PaidInvoicesComponent implements OnInit {

  ELEMENT_DATA: any = [
    {invoice: 132, billing_contact: 'Doug Pederson', company: 'Eagles Corporation', bill_date: '2/09/2020', due_date: '2/09/2020', total: '450', actions: ''},
    {invoice: 234, billing_contact: 'Payable Accounts', company: 'Dawlance Company', bill_date: '10/05/2020', due_date: '10/05/2020', total: '1100', actions: ''},
    {invoice: 454, billing_contact: 'Ben issa Mohamed', company: 'Honda Company', bill_date: '15/11/2020', due_date: '15/11/2020', total: '890', actions: ''},
    {invoice: 675, billing_contact: 'Biling Contact CC', company: 'Edifier Co.', bill_date: '22/12/2019', due_date: '22/12/2019', total: '2500', actions: ''},
    {invoice: 100, billing_contact: 'Kiff Kingsburry', company: 'Logon Corporation', bill_date: '14/02/2019', due_date: '14/02/2019', total: '300', actions: ''},
  ];

  displayedColumns: string[] = ['invoice', 'billing_contact', 'company', 'bill_date', 'due_date', 'total', 'actions'];
  dataSource = this.ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
