import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../../../todo.model';
import { TodoService } from '../../../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  todos: Todo[];

  @Input() todo: Todo;
  @Output() myOutput = new EventEmitter();

  constructor(private todoService: TodoService) { }
  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  selectTodo() {
    this.todoService.todoSelected.next(this.todo);
  }

  removeItem(todoItem) {
    this.todoService.removeItem(todoItem);
  }

  onSetStatus(status) {
    this.todoService.setStatus(status.checked, this.todo);
  }
}
