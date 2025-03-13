import { Todo } from "@/types/todo.type";

const BASE_URL = "http://localhost:3000/todos";

export const getTodos = async () => {
  const response = await fetch(BASE_URL);
  const data: Todo[] = await response.json();

  return data;
};

// 할 일 생성 로직
export const createTodo = async (text: string) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text: text, completed: false })
  });
  const data: Todo = await response.json();

  return data;
};

// 할 일 삭제 로직
export const deleteTodo = async (id: Todo["id"]) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE"
  });
  const data: Todo = await response.json();

  return data;
};

// 할 일 완료 여부(업데이트) 로직
export const toggleTodoCompleted = async (
  id: Todo["id"],
  completed: Todo["completed"]
) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ completed: !completed })
  });
  const data: Todo = await response.json();

  return data;
};
