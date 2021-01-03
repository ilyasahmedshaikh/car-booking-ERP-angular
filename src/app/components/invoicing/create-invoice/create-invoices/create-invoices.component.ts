import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InvoiceModalComponent } from '../../../../shared/invoice-modal/invoice-modal.component';


@Component({
  selector: 'app-create-invoices',
  templateUrl: './create-invoices.component.html',
  styleUrls: ['./create-invoices.component.scss']
})
export class CreateInvoicesComponent implements OnInit {

  ELEMENT_DATA: any = [
    {reservation: 'Reservation #', po_reference: 'PO/ Reference', date: 'Date', time: 'Time', passenger_name: 'Passenger Name', pickup_location_destination: 'Pickup Location + Destination', vehicle: 'Vehicle', total: 'Total'},
    {reservation: 'Reservation #', po_reference: 'PO/ Reference', date: 'Date', time: 'Time', passenger_name: 'Passenger Name', pickup_location_destination: 'Pickup Location + Destination', vehicle: 'Vehicle', total: 'Total'},
    {reservation: 'Reservation #', po_reference: 'PO/ Reference', date: 'Date', time: 'Time', passenger_name: 'Passenger Name', pickup_location_destination: 'Pickup Location + Destination', vehicle: 'Vehicle', total: 'Total'},
    {reservation: 'Reservation #', po_reference: 'PO/ Reference', date: 'Date', time: 'Time', passenger_name: 'Passenger Name', pickup_location_destination: 'Pickup Location + Destination', vehicle: 'Vehicle', total: 'Total'},
  ];

  displayedColumns: string[] = ['reservation', 'po_reference', 'date', 'time', 'passenger_name', 'pickup_location_destination', 'vehicle', 'total'];
  dataSource = this.ELEMENT_DATA;

  constructor(
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(InvoiceModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}