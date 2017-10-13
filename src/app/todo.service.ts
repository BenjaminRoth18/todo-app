import { Todo } from './todo.model';
import { Subject } from 'rxjs/Subject';
import {TodoType} from './todo.type';

export class TodoService {
  todos: Todo[] = [];

  todoSelected = new Subject<Todo>();
  filter = new Subject<Todo[]>();

  filterType: TodoType = null;

  getTodos() {
    return this.todos;
  }

  removeItem(todoItem) {
    const element = this.todos.indexOf(todoItem);
    this.todos.splice(element, 1);
    this.applyFilter();
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    this.applyFilter();
  }

  setStatus(newStatus: boolean, item: Todo) {
    const foundTodo = this.todos.find(todo => todo === item);
    foundTodo.status = newStatus ? TodoType.COMPLETE : TodoType.INCOMPLETE;
    this.applyFilter();
  }

  setFilter(filterType: TodoType) {
    this.filterType = filterType;
    this.applyFilter();
  }

  applyFilter() {
    const filterResults = this.todos.filter(todo => this.filterType === null || todo.status === this.filterType);
    this.filter.next(filterResults);
  }
}
