import {Component, OnInit} from '@angular/core';

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
  buttonDisabled = true;
  input: string;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todos = this.todoService.todos;
  }

  changeInput(input) {
    if (input.target.value !== '') {
      this.buttonDisabled = false;
    } else {
      this.buttonDisabled = true;
    }
  }

  onAddTodo(addTodoName) {
    const todoName = addTodoName.value;
    const newTodo = new Todo(todoName, '', '', TodoType.INCOMPLETE);

    if (todoName) {
      this.todoService.addTodo(newTodo);
    }
  }
}
