import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-invoices',
  templateUrl: './create-invoices.component.html',
  styleUrls: ['./create-invoices.component.scss']
})
export class CreateInvoicesComponent implements OnInit {

  ELEMENT_DATA: any = [
    {checkbox: false, conf: 132, date: '2/09/2020', passenger: 'P 1', pickup_location: 'Cecilia Chapman, Nulla St. Mankato', dropoff_location: 'Hiroko Potter, P.O. 25 Dolor Muskegon', trip_total: '230', total_due: '4508'},
    {checkbox: false, conf: 234, date: '10/05/2020', passenger: 'P 2', pickup_location: 'Iris Watson, P.O Box 8562 Fusce Rd', dropoff_location: 'Forrest Ray 19-1 Integer, New Mexico', trip_total: '890', total_due: '1200'},
    {checkbox: false, conf: 454, date: '15/11/2020', passenger: 'P 3', pickup_location: 'Theodore Lowe 86-59 Sit Rd, Azusa', dropoff_location: 'Kyla Olsen 651-7 Sodales, Tamuning', trip_total: '990', total_due: '895'},
  ];

  displayedColumns: string[] = ['checkbox', 'conf', 'date', 'passenger', 'pickup_location', 'dropoff_location', 'trip_total', 'total_due'];
  dataSource = this.ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}