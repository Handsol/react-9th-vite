import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodoContext } from "../../../context/TodoContext";
import { useSearchParams } from "react-router";

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  const [searchParams] = useSearchParams();

  const selectedFilter = searchParams.get("filter");

  const getFilterTodos = (selectedFilter) => {
    if (selectedFilter === "completed") {
      return todos.filter((todo) => todo.completed);
    }

    if (selectedFilter === "pending") {
      return todos.filter((todo) => !todo.completed);
    }

    return todos;
  };

  const filterTodos = getFilterTodos(selectedFilter);

  return (
    <TodoListSection>
      <TodoListHeader>Tasks</TodoListHeader>
      <TodoListContent>
        {filterTodos.map(({ id, text, completed }) => (
          <TodoItem key={id} text={text} completed={completed} id={id} />
        ))}
      </TodoListContent>
    </TodoListSection>
  );
};

const TodoListSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TodoListHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;
const TodoListContent = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default TodoList;
