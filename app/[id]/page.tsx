import { getTodoItem } from "@/api/todo.api";
import TodoItem from "@/components/todo/TodoItem";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface DetailPageProps {
  params: Promise<{ id: string }>;
}

const DetailPage = async ({ params }: DetailPageProps) => {
  const { id } = await params;

  const todoItem = await getTodoItem(id);

  return (
    <section>
      <div className="container p-2 mx-auto space-y-4">
        <TodoItem todo={todoItem} />

        <Link href="/">
          <Button className="w-full">Back</Button>
        </Link>
      </div>
    </section>
  );
};

export default DetailPage;
