import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-invoices',
  templateUrl: './create-invoices.component.html',
  styleUrls: ['./create-invoices.component.scss']
})
export class CreateInvoicesComponent implements OnInit {

  ELEMENT_DATA: any = [
    {checkbox: false, reservation: 'Reservation #', po_reference: 'PO/ Reference', date: 'Date', time: 'Time', passenger_name: 'Passenger Name', pickup_location_destination: 'Pickup Location + Destination', vehicle: 'Vehicle', total: 'Total'},
    {checkbox: false, reservation: 'Reservation #', po_reference: 'PO/ Reference', date: 'Date', time: 'Time', passenger_name: 'Passenger Name', pickup_location_destination: 'Pickup Location + Destination', vehicle: 'Vehicle', total: 'Total'},
    {checkbox: false, reservation: 'Reservation #', po_reference: 'PO/ Reference', date: 'Date', time: 'Time', passenger_name: 'Passenger Name', pickup_location_destination: 'Pickup Location + Destination', vehicle: 'Vehicle', total: 'Total'},
    {checkbox: false, reservation: 'Reservation #', po_reference: 'PO/ Reference', date: 'Date', time: 'Time', passenger_name: 'Passenger Name', pickup_location_destination: 'Pickup Location + Destination', vehicle: 'Vehicle', total: 'Total'},
  ];

  displayedColumns: string[] = ['checkbox', 'reservation', 'po_reference', 'date', 'time', 'passenger_name', 'pickup_location_destination', 'vehicle', 'total'];
  dataSource = this.ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}