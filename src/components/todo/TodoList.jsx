import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodoCompleted, deleteTodo }) => {
  return (
    <ul>
      {todos.map(({ id, text, completed }) => (
        <TodoItem
          key={id}
          toggleTodoCompleted={toggleTodoCompleted}
          deleteTodo={deleteTodo}
          text={text}
          completed={completed}
          id={id}
        />
      ))}
    </ul>
  );
};

export default TodoList;
