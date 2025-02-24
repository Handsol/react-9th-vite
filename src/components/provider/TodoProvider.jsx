import { useEffect, useState } from "react";
import { TodoContext } from "../../../context/TodoContext";
import { todoClient } from "../../lib/todoClient";

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const { data } = await todoClient.get("/");

    setTodos(data);
  };

  const getTodoItem = async (id) => {
    const { data } = await todoClient.get(`/${id}`);
    return data;
  };

  const addTodos = async (text) => {
    const { data } = await todoClient.post("/", {
      text,
      completed: false,
    });

    await getTodos();

    return data;
  };

  const toggleTodoCompleted = async (id, currentCompleted) => {
    const { data } = await todoClient.patch(`/${id}`, {
      completed: !currentCompleted,
    });

    await getTodos();

    return data;
  };

  const deleteTodo = async (id) => {
    const { data } = await todoClient.delete(`/${id}`);

    await getTodos();

    return data;
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <TodoContext.Provider
      value={{
        todos,
        getTodoItem,
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
