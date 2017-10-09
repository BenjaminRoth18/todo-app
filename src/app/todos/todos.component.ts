import { Component, OnInit } from '@angular/core';

import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  providers: [TodoService]
})
export class TodosComponent implements OnInit {
  selectedTodo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {}
}
