import { EventEmitter } from '@angular/core';

import { Todo } from './todo.model';

export class TodoService {
  todos: Todo[] = [
    {
      name: 'Äpfel',
      status: 'done'
    }
  ];

  todoSelected = new EventEmitter<Todo>();

  getTodos() {
    return this.todos;
  }

  removeItem(todoItem) {
    const element = this.todos.indexOf(todoItem);
    this.todos.splice(element, 1);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
}
