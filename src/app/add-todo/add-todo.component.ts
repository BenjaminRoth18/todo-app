import {Component, OnInit, Input} from '@angular/core';

import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  constructor(private todoService: TodoService) { }
  ngOnInit() {
  }

  onAddTo(addTodoItem) {
    const todoName = addTodoItem.value;
    const newTodo = new Todo(todoName);
    this.todoService.addTodo(newTodo);
    console.log(newTodo);
  }
}
