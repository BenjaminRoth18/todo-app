import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

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
  @Output() myOutput = new EventEmitter();

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

  selectTodo() {
    this.todoService.todoSelected.next(this.todo);
  }

  removeItem(todoItem) {
    this.todoService.removeItem(todoItem);
  }

  onSetStatus(status: any) {
    this.todoService.setStatus(status.checked, this.todo);
  }
}
