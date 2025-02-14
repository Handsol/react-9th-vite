import { useState } from "react";
import { TodoContext } from "../../../context/TodoContext";
import { SAMPLE_TODOS } from "../../constants/sample-todos";

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(SAMPLE_TODOS);

  const addTodos = (text) => {
    setTodos([{ id: crypto.randomUUID(), text, completed: false }, ...todos]);
  };

  const toggleTodoCompleted = (id) => {
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

  const deleteTodo = (id) => {
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
    <TodoContext.Provider
      value={{
        todos,
        addTodos,
        toggleTodoCompleted,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
