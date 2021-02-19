import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddRateModalComponent } from '../../../shared/add-rate-modal/add-rate-modal.component';

@Component({
  selector: 'app-driver-pay-settings',
  templateUrl: './driver-pay-settings.component.html',
  styleUrls: ['./driver-pay-settings.component.scss']
})
export class DriverPaySettingsComponent implements OnInit {

  ELEMENT_DATA: any = [
    {rate_name: 'Rate One', driver_name: 'John Smith', vehicle: 'Sedan', rate: '', option: ''},
    {rate_name: 'Rate Two', driver_name: 'Giovani', vehicle: 'Hatchback', rate: '', option: ''},
    {rate_name: 'Rate Three', driver_name: 'Emily Noah', vehicle: 'Minivan', rate: '', option: ''},
    {rate_name: 'Rate Four', driver_name: '	Michael', vehicle: 'Coupe', rate: '', option: ''},
  ];

  displayedColumns: string[] = ['rate_name', 'driver_name', 'vehicle', 'rate', 'option'];
  dataSource = this.ELEMENT_DATA;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open( AddRateModalComponent );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
