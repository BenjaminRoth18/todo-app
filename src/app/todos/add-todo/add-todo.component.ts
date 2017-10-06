import {Component, OnInit } from '@angular/core';

import { Todo } from '../../todo.model';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  todos: Todo[];
  buttonState = true;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  changeInput(input) {
    if (input !== '') {
      this.buttonState = false;
    }
  }

  onAddTodo(addTodoItem) {
    const todoName = addTodoItem.value;
    const newTodo = new Todo(todoName, 'done');

    if (todoName) {
      this.todoService.addTodo(newTodo);
    }
  }
}
