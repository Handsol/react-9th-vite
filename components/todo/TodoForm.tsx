"use client";

import { createTodo } from "@/api/todo.api";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

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
    <form
      onSubmit={(e) => onSubmit(e)}
      className="flex w-full items-center space-x-2 bg-gray-200 p-3 rounded-md"
    >
      <Input
        type="text"
        name="todo-text"
        required
        placeholder="Insert what you have to do"
        className="bg-white"
      />
      <Button type="submit">add todo</Button>
    </form>
  );
};
