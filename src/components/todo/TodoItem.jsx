import React from "react";

const TodoItem = ({ id, text, completed, toggleTodoCompleted, deleteTodo }) => {
  return (
    <li>
      <p style={{ textDecoration: completed ? "line-through" : "none" }}>
        {text}
      </p>

      <button onClick={() => toggleTodoCompleted(id)}>
        {completed ? "취소하기" : "완료하기"}
      </button>

      <button onClick={() => deleteTodo(id)}>삭제하기</button>
    </li>
  );
};

export default TodoItem;
