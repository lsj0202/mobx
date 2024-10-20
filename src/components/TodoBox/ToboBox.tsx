import st from './TodoBox.module.scss'
import { AiOutlineDelete } from "react-icons/ai";

function TodoBox() {
  return (
    <div className={st.container}>
      <p className={st.contents}>dsfsdfs fssdfsd  sdfsdfsdfsdf dfsdfsdf dsf sdfsdfsddsfsdfs fssdfsd  sdfsdfsdfsdf dfsdfsdf dsf sdfsdfsddsfsdfs fssdfsd  sdfsdfsdfsdf dfsdfsdf dsf sdfsdfsdffsdfsdfsdffsdfsdfsdffsdfsdfsdffsdfsdfsdffsdfsdfsdffsdfsdfsdffsdfsdfsdffsdfsdfsdffs
        dfsdfsdffsdfsdfsdffsdfsd
        fsdffsdfsdfsdffsdfsdfsdff</p>
      <div className={st.authorWrapper}>
        <AiOutlineDelete className={st.delete} />
        <span>작성자: 시인</span>
      </div>
    </div>
  )
}

export default TodoBox;