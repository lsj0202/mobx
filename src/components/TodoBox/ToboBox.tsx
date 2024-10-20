import st from './TodoBox.module.scss'
import { AiOutlineDelete } from "react-icons/ai";
import TodoBoxVm from './TodoBoxVm';

type TodoBoxProps = {
  id: number;
  contents: string;
  author: string;
}

function TodoBox({ id, contents, author }: TodoBoxProps) {
  return (
    <div className={st.container}>
      <p className={st.contents}>{contents}</p>
      <div className={st.authorWrapper}>
        <AiOutlineDelete className={st.delete} onClick={() => TodoBoxVm.deleteTodo(id)}/>
        <span>작성자: {author}</span>
      </div>
    </div>
  )
}

export default TodoBox;