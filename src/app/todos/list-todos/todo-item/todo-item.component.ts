import {Component, OnInit, Input } from '@angular/core';

import {Todo} from '../../../todo.model';
import {TodoService} from '../../../todo.service';
import {TodoType} from '../../../todo.type';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  editTodo = false;


  getStatusCssClass(status: TodoType): string {
    if (status === TodoType.INCOMPLETE) {
      return 'incomplete';
    }

    if (status === TodoType.COMPLETE) {
      return 'complete';
    }

    return '';
  }

  getStatusChecked(status: TodoType): boolean {
    if (status === TodoType.COMPLETE) {
      return true;
    }
    return false;
  }

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
  }

  removeItem(todoItem: Todo) {
    this.todoService.removeItem(todoItem);
  }

  onSetStatus(status: any) {
    this.todoService.setStatus(status.checked, this.todo);
  }

  onChangeName() {
    this.editTodo = true;
  }

  editingFinished(todo, editedtodo) {
    todo.name = editedtodo;
    this.editTodo = false;
  }
}
