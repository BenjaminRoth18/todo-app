import {Todo} from './todo.model';
import {Subject} from 'rxjs/Subject';
import {TodoType} from './todo.type';

export class TodoService {
  todos: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]');

  filter = new Subject<Todo[]>();
  filterType: TodoType = null;

  removeItem(todoItem) {
    const element = this.todos.indexOf(todoItem);
    this.todos.splice(element, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
    this.applyFilter();
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
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

  changedName(todo, editedTodo) {
    const changedTodoName = editedTodo;
    const findRenamedTodoIndex = this.todos.indexOf(todo);
    const findRenamedTodo = this.todos[findRenamedTodoIndex];
    findRenamedTodo.name = changedTodoName;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
