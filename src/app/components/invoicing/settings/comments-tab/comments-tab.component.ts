import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-tab',
  templateUrl: './comments-tab.component.html',
  styleUrls: ['./comments-tab.component.scss']
})
export class CommentsTabComponent implements OnInit {

  ELEMENT_DATA: any = [
    {comment: 'Message 1', actions: ''},
    {comment: 'Message 2', actions: ''},
    {comment: 'Message 3', actions: ''},
  ];

  displayedColumns: string[] = ['comment', 'actions'];
  dataSource = this.ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
