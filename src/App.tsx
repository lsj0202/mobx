import st from './App.module.scss'
import CreateTodo from './components/CreateTodo/CreateTodo';
import TodoBox from './components/TodoBox/ToboBox';

function App() {
  return (
    <div className={st.container}>
      <CreateTodo />
      <TodoBox />
      <TodoBox />
      <TodoBox />
    </div>
  );
}

export default App;
