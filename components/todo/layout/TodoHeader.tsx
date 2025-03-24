import Link from "next/link";

const TodoHeader = () => {
  return (
    <header>
      <div className="container flex flex-row mx-auto p-2">
        <Link href="/">
          <h1 className="text-4xl font-bold">TodoList</h1>
        </Link>
      </div>
    </header>
  );
};

export default TodoHeader;
