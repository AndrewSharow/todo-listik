import { useEffect, useState } from "react";
import TodoItem from "../TodoItem/TodoItem.jsx";
import TodoDataTempplate from "../../assets/TodoTemplate.json";
import s from "./TodosList.module.css";
import { nanoid } from "nanoid";
import TodoInput from "./TodoInput/TodoInput.jsx";
const TodosList = () => {
  const [TodoList, setTodoList] = useState(() => {
    const todoListTemp = JSON.parse(window.localStorage.getItem("todoList"));
    if (todoListTemp?.length) {
      return todoListTemp;
    }
    return TodoDataTempplate;
  });
  const [TodoInputValue, setTodoInputValue] = useState("");

  const handleDeleteTodoItem = (id) => {
    // console.log(id);
    setTodoList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddTodo = () => {
    console.log(TodoInputValue);
    if (TodoInputValue) {
      const newTodo = { id: nanoid(), text: TodoInputValue };
      setTodoList((prev) => [...prev, newTodo]);
      setTodoInputValue("");
    }
  };

  useEffect(() => {
    window.localStorage.setItem("todoList", JSON.stringify(TodoList));
    console.log("List saved");
  }, [TodoList]);

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
