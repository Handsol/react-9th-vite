import { getTodos } from "@/api/todo.api";
import TodoItem from "./TodoItem";

export const TodoList = async () => {
  const todos = await getTodos();

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};
