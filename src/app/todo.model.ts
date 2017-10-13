import {TodoType} from './todo.type';

export class Todo {
  public name: string;
  public status: TodoType;

  constructor(name: string, status: TodoType) {
    this.name = name;
    this.status = status;
  }
}
