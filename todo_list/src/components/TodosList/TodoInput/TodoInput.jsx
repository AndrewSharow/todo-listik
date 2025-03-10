import s from "./TodoInput.module.css";

const TodoInput = ({ TodoInputValue, setTodoInputValue, handleAddTodo }) => {
  return (
    <div className={s.InputDiv}>
      <input
        placeholder="Write your task:"
        className={s.Input}
        value={TodoInputValue}
        onChange={(e) => {
          setTodoInputValue(e.target.value);
        }}
      />
      <button
        type="button"
        className={s.ButtonSubmit}
        onClick={() => handleAddTodo()}
      >
        Submit
      </button>
    </div>
  );
};

export default TodoInput;
