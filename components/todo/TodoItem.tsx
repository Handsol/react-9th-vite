"use client";

import { Todo } from "@/types/todo.type";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <div>
      <h2>{todo.text}</h2>
      <p>{todo.completed ? "완료" : "미완료"}</p>
      <div>
        <button>Complete</button>
        <button>Delete</button>
      </div>
    </div>
  );
};
