import {Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Todo } from '../../todo.model';
import { TodoService } from '../../todo.service';
import {TodoType} from '../../todo.type';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  todos: Todo[];
  buttonState = true;
  @Output() footerState = new EventEmitter<boolean>();

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  changeInput(input) {
    if (input !== '') {
      this.buttonState = false;
    }
  }

  onAddTodo(addTodoItem) {
    const todoName = addTodoItem.value;
    const newTodo = new Todo(todoName, TodoType.INCOMPLETE);

    if (todoName) {
      this.todoService.addTodo(newTodo);
    }

    this.footerState.emit(true);
  }
}
