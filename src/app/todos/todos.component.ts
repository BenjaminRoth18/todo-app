import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  constructor() { }
  footerState = false;

  ngOnInit() {}

  setFooterState(state) {
    this.footerState = state;
  }
}
