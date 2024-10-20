import todoModel from "../../model/todoModel";

class TodoBoxVm {
  deleteTodo(id: number) {
    todoModel.todoList = todoModel.todoList.filter(todo => todo.id !== id);
  }
}

export default new TodoBoxVm();