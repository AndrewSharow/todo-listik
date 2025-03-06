import s from "./TodoInput.module.css";

const TodoInput = () => {
  return (
    <div className={s.InputDiv}>
      <input placeholder="Write your task:" className={s.Input} />
      <button type="button" className={s.ButtonSubmit}>
        Submit
      </button>
    </div>
  );
};

export default TodoInput;
