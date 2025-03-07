import { useState } from "react";
import TodoItem from "../TodoItem/TodoItem.jsx";
import TodoData from "../../assets/Todo.json";
import s from "./TodosList.module.css";
import { nanoid } from "nanoid";
import TodoInput from "./TodoInput/TodoInput.jsx";
const TodosList = () => {
  const [TodoList, setTodoList] = useState(TodoData);
  const [TodoInputValue, setTodoInputValue] = useState("");

  const handleDeleteTodoItem = (id) => {
    console.log(id);
    setTodoList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddTodo = () => {
    const newTodo = { id: nanoid(), text: TodoInputValue };
    setTodoList((prev) => [...prev, newTodo]);
  };

  return (
    <>
      <TodoInput
        TodoInputValue={TodoInputValue}
        setTodoInputValue={setTodoInputValue}
        handleAddTodo={handleAddTodo}
      />
      <hr />
      <ul className={s.Todoslist}>
        {TodoList.map((item) => (
          <TodoItem
            key={item.id}
            {...item}
            handleDeleteTodoItem={handleDeleteTodoItem}
          />
        ))}
      </ul>
    </>
  );
};

export default TodosList;
