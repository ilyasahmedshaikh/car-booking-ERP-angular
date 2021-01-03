import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-terms-tab',
  templateUrl: './payment-terms-tab.component.html',
  styleUrls: ['./payment-terms-tab.component.scss']
})
export class PaymentTermsTabComponent implements OnInit {

  ELEMENT_DATA: any = [
    {method: 'Due Upon Receipt', actions: ''},
    {method: 'Receipt Undefined', actions: ''},
  ];

  displayedColumns: string[] = ['method', 'actions'];
  dataSource = this.ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
