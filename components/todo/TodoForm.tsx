"use client";

import { createTodo } from "@/api/todo.api";

export const TodoForm = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const todoText = formData.get("todo-text") as string;

    await createTodo(todoText);

    form.reset();
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input type="text" name="todo-text" />
      <button type="submit">add Todo</button>
    </form>
  );
};
