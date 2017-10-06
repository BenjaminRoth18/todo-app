import { Todo } from './todo.model';

export class TodoService {
  todos: Todo[] = [];

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
