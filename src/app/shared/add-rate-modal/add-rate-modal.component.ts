import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddRateOptionModalComponent } from '../../shared/add-rate-option-modal/add-rate-option-modal.component';

@Component({
  selector: 'app-add-rate-modal',
  templateUrl: './add-rate-modal.component.html',
  styleUrls: ['./add-rate-modal.component.scss']
})
export class AddRateModalComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open( AddRateOptionModalComponent );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
