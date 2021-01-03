import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-template',
  templateUrl: './invoice-template.component.html',
  styleUrls: ['./invoice-template.component.scss']
})
export class InvoiceTemplateComponent implements OnInit {

  ELEMENT_DATA: any = [
    {reservation: 'Reservation #', po_reference: 'PO/ Reference', date: 'Date', time: 'Time', passenger_name: 'Passenger Name', pickup_location_destination: 'Pickup Location + Destination', vehicle: 'Vehicle', total: 'Total'},
    {reservation: 'Reservation #', po_reference: 'PO/ Reference', date: 'Date', time: 'Time', passenger_name: 'Passenger Name', pickup_location_destination: 'Pickup Location + Destination', vehicle: 'Vehicle', total: 'Total'},
    {reservation: 'Reservation #', po_reference: 'PO/ Reference', date: 'Date', time: 'Time', passenger_name: 'Passenger Name', pickup_location_destination: 'Pickup Location + Destination', vehicle: 'Vehicle', total: 'Total'},
  ];

  displayedColumns: string[] = ['reservation', 'po_reference', 'date', 'time', 'passenger_name', 'pickup_location_destination', 'vehicle', 'total'];
  dataSource = this.ELEMENT_DATA;
  
  constructor() { }

  ngOnInit(): void {
  }

}
