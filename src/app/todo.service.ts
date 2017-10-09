import { Todo } from './todo.model';
import { Subject } from 'rxjs/Subject';

export class TodoService {
  todos: Todo[] = [
    {
      name: 'Äpfel',
      status: 'done'
    }
  ];

  todoSelected = new Subject<Todo>();

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
