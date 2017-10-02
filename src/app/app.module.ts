import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { ListHighlightDirective } from './directives/list-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddTodoComponent,
    ListTodosComponent,
    ListHighlightDirective
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot()
  ],
  exports: [BsDropdownModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
