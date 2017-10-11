import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Todo } from '../../todo.model';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListTodosComponent implements OnInit {
  todos: Todo[];
  statusClass = false;

  constructor(private todoService: TodoService) { }
  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }
}
