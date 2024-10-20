import todoModel from "../../model/todoModel";

class TodoBoxVm {
  deleteTodo(id: number) {
    todoModel.todoList = todoModel.todoList.filter(todo => todo.id !== id);
  }

  get contents() {
    return todoModel.contents;
  }

  get author() {
    return todoModel.author;
  }

  setNewContents(value: string) {
    todoModel.contents = value;
  }

  setNewAuthor(value: string) {
    todoModel.author = value;
  }

  changeTodo(id: number, contents: string, author: string) {
    const todo = todoModel.todoList.find(todo => todo.id === id);
    if (todo) {
      todo.contents = contents;
      todo.author = author;
    }
  }
}

export default new TodoBoxVm();