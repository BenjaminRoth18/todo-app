import { Component, OnInit, } from '@angular/core';
import { Todo } from '../../todo.model';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) { }
  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }
}
