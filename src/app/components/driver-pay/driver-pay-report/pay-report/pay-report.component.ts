import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay-report',
  templateUrl: './pay-report.component.html',
  styleUrls: ['./pay-report.component.scss']
})
export class PayReportComponent implements OnInit {

  ELEMENT_DATA: any = [
    {date: '19/9/2020', rese: '85602', passenger_name: 'John Smith', payment_method: 'Credit Card', base_fee: '', other_fee_list: '', total: ''},
    {date: '25/2/2020', rese: '96602', passenger_name: 'Michael Noah', payment_method: 'On Account', base_fee: '', other_fee_list: '', total: ''},
    {date: '13/5/2020', rese: '12602', passenger_name: 'Alexendra', payment_method: 'Credit Card', base_fee: '', other_fee_list: '', total: ''},
    {date: '09/3/2020', rese: '36602', passenger_name: 'Edwin Liam', payment_method: 'On Account', base_fee: '', other_fee_list: '', total: ''},
    {date: '30/7/2020', rese: '79602', passenger_name: 'Lucas Milano', payment_method: 'Credit Card', base_fee: '', other_fee_list: '', total: ''},
    
  ];

  displayedColumns: string[] = ['date', 'rese', 'passenger_name', 'payment_method', 'base_fee', 'other_fee_list', 'total'];
  dataSource = this.ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
