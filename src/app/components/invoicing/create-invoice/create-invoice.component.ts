import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.scss']
})
export class CreateInvoiceComponent implements OnInit {

  selectedIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onTabChanged(event: any) {
    this.selectedIndex = event;
  }

}
