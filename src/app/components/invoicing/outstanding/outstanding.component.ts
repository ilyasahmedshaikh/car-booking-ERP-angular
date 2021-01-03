import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outstanding',
  templateUrl: './outstanding.component.html',
  styleUrls: ['./outstanding.component.scss']
})
export class OutstandingComponent implements OnInit {

  ELEMENT_DATA: any = [
    {invoice: 132, billing_contact: 'Doug Pederson', company: 'Eagles Corporation', bill_date: '2/09/2020', due_date: '2/09/2020', status: '15 days overdue', total: '4508.25', outstanding: '950825', actions: ''},
    {invoice: 234, billing_contact: 'Payable Accounts', company: 'Dawlance Company', bill_date: '10/05/2020', due_date: '10/05/2020', status: '30 days overdue', total: '1203.00', outstanding: '5203.99', actions: ''},
    {invoice: 454, billing_contact: 'Ben issa Mohamed', company: 'Honda Company', bill_date: '15/11/2020', due_date: '15/11/2020', status: '45 days overdue', total: '895.2', outstanding: '495.0', actions: ''},
    {invoice: 675, billing_contact: 'Biling Contact CC', company: 'Edifier Co.', bill_date: '22/12/2019', due_date: '22/12/2019', status: '125 days overdue', total: '2583', outstanding: '7583.52', actions: ''},
    {invoice: 100, billing_contact: 'Kiff Kingsburry', company: 'Logon Corporation', bill_date: '14/02/2019', due_date: '14/02/2019', status: '252 days overdue', total: '203.88', outstanding: '1038', actions: ''},
    {invoice: 132, billing_contact: 'Doug Pederson', company: 'Eagles Corporation', bill_date: '2/09/2020', due_date: '2/09/2020', status: '15 days overdue', total: '4508.25', outstanding: '950825', actions: ''},
    {invoice: 234, billing_contact: 'Payable Accounts', company: 'Dawlance Company', bill_date: '10/05/2020', due_date: '10/05/2020', status: '30 days overdue', total: '1203.00', outstanding: '5203.99', actions: ''},
  ];

  displayedColumns: string[] = ['invoice', 'billing_contact', 'company', 'bill_date', 'due_date', 'status', 'total', 'outstanding', 'actions'];
  dataSource = this.ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
