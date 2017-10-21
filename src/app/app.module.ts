import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddTodoComponent } from './todos/add-todo/add-todo.component';
import { ListTodosComponent } from './todos/list-todos/list-todos.component';
import { TodoItemComponent } from './todos/list-todos/todo-item/todo-item.component';
import { TodosComponent } from './todos/todos.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { ToggleAddDirective } from './directives/toggle-add.directive';
import { ToggleRemoveDirective } from './directives/toggle-remove.directive';
import { DetailComponent } from './todos/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddTodoComponent,
    ListTodosComponent,
    TodoItemComponent,
    TodosComponent,
    SidebarComponent,
    ToggleAddDirective,
    ToggleRemoveDirective,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
