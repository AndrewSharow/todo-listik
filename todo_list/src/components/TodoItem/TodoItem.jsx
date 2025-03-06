import s from "./TodoItem.module.css";

const TodoItem = ({ id, text, handleDeleteTodoItem }) => {
  return (
    <li className={s.TodoTask} id={id}>
      <span className={s.TextContainer}>{text}</span>
      <button
        onClick={() => handleDeleteTodoItem(id)}
        className={s.ButtonDelete}
      >
        Delete!
      </button>
    </li>
  );
};

export default TodoItem;
