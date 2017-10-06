import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddTodoComponent } from './todos/add-todo/add-todo.component';
import { ListTodosComponent } from './todos/list-todos/list-todos.component';
import { DetailComponent } from './todos/detail/detail.component';
import { TodoItemComponent } from './todos/list-todos/todo-item/todo-item.component';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddTodoComponent,
    ListTodosComponent,
    DetailComponent,
    TodoItemComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
