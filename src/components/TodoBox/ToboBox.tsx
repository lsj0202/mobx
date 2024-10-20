import st from './TodoBox.module.scss';
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegPenToSquare } from "react-icons/fa6";
import TodoBoxVm from './TodoBoxVm';
import { useState } from 'react';
import { observer } from 'mobx-react';

type TodoBoxProps = {
  id: number;
  contents: string;
  author: string;
}

const TodoBox = observer(({ id, contents, author }: TodoBoxProps) => {
  const [modifyTodo, setModifyTodo] = useState(false);
  const [newContents, setNewContents] = useState(contents);
  const [newAuthor, setNewAuthor] = useState(author);

  const handleUpdate = () => {
    TodoBoxVm.changeTodo(id, newContents, newAuthor);
    setModifyTodo(false);
  };

  return (
    <div className={st.container}>
      {modifyTodo ? (
        <>
          <textarea
            className={st.contentsTextarea}
            value={newContents}
            onChange={(e) => setNewContents(e.target.value)}
          />
          <div className={st.authorWrapper}>
            <div className={st.iconWrapper}>
              <AiOutlineDelete className={st.delete} onClick={() => TodoBoxVm.deleteTodo(id)} />
              <FaRegPenToSquare className={st.update} onClick={() => setModifyTodo(!modifyTodo)} />
            </div>
            <div className={st.submitWrapper}>
              <input
                className={st.authorInput}
                type='text'
                value={newAuthor}
                onChange={(e) => setNewAuthor(e.target.value)}
              />
              <button className={st.button} onClick={handleUpdate}>제출</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <p className={st.contents}>{contents}</p>
          <div className={st.authorWrapper}>
            <div className={st.iconWrapper}>
              <AiOutlineDelete className={st.delete} onClick={() => TodoBoxVm.deleteTodo(id)} />
              <FaRegPenToSquare className={st.update} onClick={() => setModifyTodo(true)} />
            </div>
            <span>작성자: {author}</span>
          </div>
        </>
      )}
    </div>
  );
});

export default TodoBox;
