import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleToggleCompleted, handleDelete }) => {
  return (
    <ul>
      {todos.map(({ id, text, completed }) => (
        <TodoItem
          key={id}
          handleToggleCompleted={handleToggleCompleted}
          handleDelete={handleDelete}
          text={text}
          completed={completed}
          id={id}
        />
      ))}
    </ul>
  );
};

export default TodoList;
