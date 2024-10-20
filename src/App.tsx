import { useObserver } from 'mobx-react';
import st from './App.module.scss'
import CreateTodo from './components/CreateTodo/CreateTodo';
import TodoBox from './components/TodoBox/ToboBox';
import todoModel from './model/todoModel';

function App() {
  return useObserver(() => (
    <div className={st.container}>
      <CreateTodo />
      {todoModel.todoList.map((todo) => <TodoBox key={todo.id} {...todo} />)}
    </div>
  ));
}

export default App;
