import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import {Todo} from '../../todo.model';
import {TodoService} from '../../todo.service';
import {TodoType} from '../../todo.type';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListTodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todos = this.todoService.getTodos();

    this.todoService.filter
      .subscribe(
        (todo: Todo[]) => {
          this.todos = todo;
        }
      );
  }

  isFilterActive(filterName: string) {
    // if (filterName === 'all' && )
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
