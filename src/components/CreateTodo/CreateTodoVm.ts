import React from "react";
import todoModel from "../../model/todoModel";

class CreateTodoVM {
  get contents() {
    return todoModel.contents;
  }

  get author() {
    return todoModel.author;
  }

  changeContents(e: React.ChangeEvent<HTMLTextAreaElement>) {
    todoModel.contents = e.target.value;
  }

  changeAuthor(e: React.ChangeEvent<HTMLInputElement>) {
    todoModel.author = e.target.value;
  }

  addTodo(contents: string, author: string) {
    if(todoModel.contents.length === 0 || todoModel.author.length === 0) return;

    todoModel.todoList.push({ id: todoModel.id++, contents, author  });

    todoModel.contents = '';
    todoModel.author = '';
  }
}

export default new CreateTodoVM();