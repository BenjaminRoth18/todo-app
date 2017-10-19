import {TodoType} from './todo.type';

export class Todo {
  public name: string;
  public image: string;
  public description: string;
  public status: TodoType;

  constructor(name: string, image: string, description: string, status: TodoType) {
    this.name = name;
    this.image = image;
    this.description = description;
    this.status = status;
  }
}
