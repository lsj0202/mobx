import { makeObservable, observable } from "mobx";

interface TodoList {
  id: number;
  contents: string;
  author: string;
}

class TodoModel {
  constructor(){
    makeObservable(this, {
      id: observable,
      contents: observable,
      author: observable,
      todoList: observable
    });
  }

  id: number = 0;
  contents: string = '';
  author: string = '';
  todoList: TodoList[] = [];
}

export default new TodoModel();