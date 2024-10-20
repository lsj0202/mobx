import st from './CreateTodo.module.scss'

function CreateTodo() {
  return (
    <div className={st.container}>
      <textarea className={st.contents}/>
      <div className={st.wrapper}>
        <input className={st.author} />
        <button className={st.button}>제출</button>
      </div>
    </div>
  )
}

export default CreateTodo;