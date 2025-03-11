import { getTodos } from "@/api/todo.api";
import Link from "next/link";

const HomePage = async () => {
  const todos = await getTodos();

  return (
    <div>
      HomePage
      <Link href="/detail">To detail Page</Link>
      <ul>
        {todos.map(({ id, text, completed }) => (
          <li key={id}>
            {text} {completed ? "(Completed)" : "(Pending)"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
