import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  data: any = [
    { id: 1, name: "John Smith", company: "Nike" },
    { id: 2, name: "Alison", company: "Google" },
    { id: 3, name: "Jonathan", company: "Amazon" },
    { id: 4, name: "Lucas Milano", company: "Adidas" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
