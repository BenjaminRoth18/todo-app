import { EventEmitter } from '@angular/core';

import { Todo } from './todo.model';

export class TodoService {
  todos: Todo[] = [];

  getTodos() {
    return this.todos;
  }

  addFilter() {
    this.todos = this.todos.filter(item => item.name.startsWith('M'));
  }

  removeItem(todoItem) {
    const element = this.todos.indexOf(todoItem);
    this.todos.splice(element, 1);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
}
