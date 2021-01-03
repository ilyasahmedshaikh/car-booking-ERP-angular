import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-app';
  opened: boolean = true;
  mode: any = 'side';

  toggleSidenav() {
    this.opened = !this.opened;
  }

  ngOnInit(): void {
    let width = window.innerWidth;

    if (width < 769) {
      this.opened = false;
      this.mode = 'over';
    } else {
      this.opened = true;
      this.mode = 'side';
    }
  }

}
