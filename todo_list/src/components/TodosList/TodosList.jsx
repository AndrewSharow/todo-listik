import { useState } from "react";
import TodoItem from "../TodoItem/TodoItem.jsx";
import TodoData from "../../assets/Todo.json";
import s from "./TodosList.module.css";
const TodosList = () => {
  const [TodoList, setTodoList] = useState(TodoData);

  const handleDeleteTodoItem = (id) => {
    console.log(id);
    setTodoList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <ul className={s.Todoslist}>
      {TodoList.map((item) => (
        <TodoItem
          key={item.id}
          {...item}
          handleDeleteTodoItem={handleDeleteTodoItem}
        />
      ))}
    </ul>
  );
};

export default TodosList;
