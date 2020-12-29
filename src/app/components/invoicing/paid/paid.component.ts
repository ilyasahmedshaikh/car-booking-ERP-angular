import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paid',
  templateUrl: './paid.component.html',
  styleUrls: ['./paid.component.scss']
})
export class PaidComponent implements OnInit {

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
