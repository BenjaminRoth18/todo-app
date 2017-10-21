import {Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Todo } from '../../todo.model';
import { TodoService } from '../../todo.service';
import { TodoType } from '../../todo.type';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListTodosComponent implements OnInit {
  todos: Todo[];
  activeFilterClass = '';
  footerState = false;
  selectedTodo: Todo;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todos = this.todoService.todos;

    if (this.todos.length > 0) {
      this.footerState = true;
    }

    this.todoService.filter
      .subscribe(
        (todo: Todo[]) => {
          this.todos = todo;
        }
      );

    this.todoService.footerState
      .subscribe(
        (status: boolean) => {
          this.footerState = status;
        }
      );

    this.todoService.todoDetail
      .subscribe(
        (todo: Todo) => {
          this.selectedTodo = todo;
        }
      );
  }

  isFilterActive(filterType: string) {
    if (filterType === 'complete' && this.todoService.filterType === TodoType.COMPLETE) {
      return this.activeFilterClass = 'active';
    }

    if (filterType === 'incomplete' && this.todoService.filterType === TodoType.INCOMPLETE) {
      return this.activeFilterClass = 'active';
    }

    if (filterType === 'all' && this.todoService.filterType === null) {
      return this.activeFilterClass = 'active';
    }
  }

  onSetFilter(filterType: string) {
    switch (filterType) {
      case 'incomplete': {
        this.todoService.setFilter(TodoType.INCOMPLETE);
        break;
      }

      case 'complete': {
        this.todoService.setFilter(TodoType.COMPLETE);
        break;
      }

      default: {
        this.todoService.setFilter(null);
        break;
      }
    }
  }
}
