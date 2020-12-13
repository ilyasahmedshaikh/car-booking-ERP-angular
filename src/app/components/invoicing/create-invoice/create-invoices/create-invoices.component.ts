import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-invoices',
  templateUrl: './create-invoices.component.html',
  styleUrls: ['./create-invoices.component.scss']
})
export class CreateInvoicesComponent implements OnInit {

  ELEMENT_DATA: any = [
    {checkbox: false, conf: 132, date: '2/09/2020', passenger: 'Passenger 1', due_date: '2/09/2020', status: '15 days overdue', finalized: '', total: '4508.25', outstanding: '950825', actions: ''},
    {checkbox: false, conf: 234, date: '10/05/2020', passenger: 'Passenger 1', due_date: '10/05/2020', status: '30 days overdue', finalized: '', total: '1203.00', outstanding: '5203.99', actions: ''},
    {checkbox: false, conf: 454, date: '15/11/2020', passenger: 'Passenger 1', due_date: '15/11/2020', status: '45 days overdue', finalized: '', total: '895.2', outstanding: '495.0', actions: ''},
    {checkbox: false, conf: 675, date: '22/12/2019', passenger: 'Passenger 1', due_date: '22/12/2019', status: '125 days overdue', finalized: '', total: '2583', outstanding: '7583.52', actions: ''},
    {checkbox: false, conf: 100, date: '14/02/2019', passenger: 'Passenger 1', due_date: '14/02/2019', status: '252 days overdue', finalized: '', total: '203.88', outstanding: '1038', actions: ''},
    {checkbox: false, conf: 132, date: '2/09/2020', passenger: 'Passenger 1', due_date: '2/09/2020', status: '15 days overdue', finalized: '', total: '4508.25', outstanding: '950825', actions: ''},
    {checkbox: false, conf: 234, date: '10/05/2020', passenger: 'Passenger 1', due_date: '10/05/2020', status: '30 days overdue', finalized: '', total: '1203.00', outstanding: '5203.99', actions: ''},
    {checkbox: false, conf: 454, date: '15/11/2020', passenger: 'Passenger 1', due_date: '15/11/2020', status: '45 days overdue', finalized: '', total: '895.2', outstanding: '495.0', actions: ''},
  ];

  displayedColumns: string[] = ['checkbox', 'conf', 'date', 'passenger', 'bill_date', 'due_date', 'status', 'finalized', 'total', 'outstanding', 'actions'];
  dataSource = this.ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
