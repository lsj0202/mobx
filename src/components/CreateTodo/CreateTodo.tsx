import { useObserver } from 'mobx-react';
import st from './CreateTodo.module.scss';
import vm from './CreateTodoVm';

function CreateTodo() {
  return useObserver(() => (
    <div className={st.container}>
      <textarea className={st.contents} name='contents' value={vm.contents} onChange={vm.changeContents} />
      <div className={st.wrapper}>
        <input className={st.author} type='text' name='author' value={vm.author} onChange={vm.changeAuthor} />
        <button className={st.button} onClick={() => vm.addTodo(vm.contents, vm.author)}>제출</button>
      </div>
    </div>
  ))
}

export default CreateTodo;