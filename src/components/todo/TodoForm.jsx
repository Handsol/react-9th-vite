import { useState } from "react";

const TodoForm = ({ addTodos }) => {
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    // 새로고침 막아주기
    e.preventDefault();

    if (!todoText.trim()) {
      return;
    }

    addTodos(todoText);

    setTodoText("");
  };

  // input 창의 입력값을 가져오는 함수
  const handleChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={todoText} onChange={handleChangeTodoText} />
      <button type="submit">제출하기</button>
    </form>
  );
};

export default TodoForm;
