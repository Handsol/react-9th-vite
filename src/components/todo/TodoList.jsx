import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const SAMPLE_TODOS = [
  { id: 1, text: "Buy milk", completed: false },
  { id: 2, text: "Clean the house", completed: false },
  { id: 3, text: "Go for a run", completed: false },
  { id: 4, text: "Finish homework", completed: false },
  { id: 5, text: "Call mom", completed: false },
  { id: 6, text: "Buy groceries", completed: false },
  { id: 7, text: "Walk the dog", completed: false },
  { id: 8, text: "Read a book", completed: false },
  { id: 9, text: "Do laundry", completed: false },
  { id: 10, text: "Write code", completed: false },
];

const TodoList = () => {
  const [todos, setTodos] = useState(SAMPLE_TODOS);
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    // 새로고침 막아주기
    e.preventDefault();

    if (!todoText.trim()) {
      return;
    }

    setTodos([
      { id: crypto.randomUUID(), text: todoText, completed: false },
      ...todos,
    ]);

    setTodoText("");
  };

  // input 창의 입력값을 가져오는 함수
  const handleChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };

  const handleToggleCompleted = (id) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }

      return todo;
    });

    setTodos(updateTodos);
  };

  const handleDelete = (id) => {
    setTodos((prev) => {
      return prev.filter((todo) => {
        if (todo.id === id) {
          return false;
        }

        return true;
      });
    });
  };

  return (
    <div>
      <TodoForm
        handleSubmit={handleSubmit}
        todoText={todoText}
        handleChangeTodoText={handleChangeTodoText}
      />
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
    </div>
  );
};

export default TodoList;
