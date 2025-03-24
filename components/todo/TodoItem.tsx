"use client";

import { toggleTodoCompleted } from "@/api/todo.api";
import { Todo } from "@/types/todo.type";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import TodoDeleteButton from "./layout/TodoDeleteButton";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { completed, id, text } = todo;

  return (
    <article className="flex flex-row items-center justify-between p-3 rounded-md border">
      <Link
        href={`/${id}`}
        className={cn("hover:underline", { "line-through": completed })}
      >
        <h2>{text}</h2>
      </Link>
      <div className="space-x-2">
        <Button
          onClick={() => toggleTodoCompleted(id, !completed)}
          variant="outline"
        >
          {completed ? "Pending" : "Complete"}
        </Button>

        <TodoDeleteButton id={id} />
      </div>
    </article>
  );
};

export default TodoItem;
