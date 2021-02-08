import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay-logs',
  templateUrl: './pay-logs.component.html',
  styleUrls: ['./pay-logs.component.scss']
})
export class PayLogsComponent implements OnInit {

  // checked = false;
  // indeterminate = false;
  // labelPosition: 'before' | 'after' = 'after';
  // disabled = false;

  
  ELEMENT_DATA: any = [
    {pay_peroid: '19/9/2020 - 25/2/2021', driver_name: 'Ali Al-Abas', net_pay: 'Total $', generated_on: 'Date', by: 'Admin Name', show_it_on_driver_app: '', actions: ''},
  
  ];

  displayedColumns: string[] = ['pay_peroid', 'driver_name', 'net_pay', 'generated_on', 'by', 'show_it_on_driver_app', 'actions'];
  dataSource = this.ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
