import {Todo} from './todo.model';
import {Subject} from 'rxjs/Subject';
import {TodoType} from './todo.type';

export class TodoService {
  todos: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]');

  filter = new Subject<Todo[]>();
  filterType: TodoType = null;

  footerState = new Subject<boolean>();

  removeItem(todoItem) {
    const element = this.todos.indexOf(todoItem);
    this.todos.splice(element, 1);
    this.setLocalStorage();

    if (this.todos.length >= 0) {
      this.footerState.next(false);
    }

    this.applyFilter();
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    this.setLocalStorage();
    this.applyFilter();
    this.footerState.next(true);
  }

  setStatus(newStatus: boolean, item: Todo) {
    const foundTodo = this.todos.find(todo => todo === item);
    foundTodo.status = newStatus ? TodoType.COMPLETE : TodoType.INCOMPLETE;
    this.applyFilter();
  }

  setFilter(filterType: TodoType) {
    this.filterType = filterType;
    this.applyFilter();

    if (filterType === 1) {
      this.footerState.next(true);
    }
  }

  applyFilter() {
    const filterResults = this.todos.filter(todo => this.filterType === null || todo.status === this.filterType);
    this.filter.next(filterResults);
  }

  changedName(todo, editedTodo) {
    const changedTodoName = editedTodo;
    const findRenamedTodoIndex = this.todos.indexOf(todo);
    const findRenamedTodo = this.todos[findRenamedTodoIndex];
    findRenamedTodo.name = changedTodoName;
    this.setLocalStorage();
  }

  setLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
