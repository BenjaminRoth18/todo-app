import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Todo } from '../todo.model';
import { TodoType } from '../todo.type';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {
  buttonDisabled = true;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  changeInput(input) {
    if (input.target.value !== '') {
      this.buttonDisabled = false;
    } else {
      this.buttonDisabled = true;
    }
  }

  onAddTodo(addTodoName, addTodoImage, addTodoDescription) {
    const todoName = addTodoName.value;
    const todoImage = addTodoImage.value;
    const todoDescription = addTodoDescription.value;
    const newTodo = new Todo(todoName, todoImage, todoDescription, TodoType.INCOMPLETE);

    if (todoName) {
      this.todoService.addTodo(newTodo);
    }
  }
}
