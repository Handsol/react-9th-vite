import { Todo } from "@/types/todo.type";

const ISRPage = async () => {
  const response = await fetch("http://localhost:3000/todos", {
    next: {
      revalidate: 5
    }
  });
  const data: Todo[] = await response.json();

  return (
    <div>
      ISRPage({new Date().toLocaleString()}): {JSON.stringify(data)}
    </div>
  );
};

export default ISRPage;
