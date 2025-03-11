export const getTodos = async () => {
  const response = await fetch("http://localhost:3000/todos");
  const data: Todo[] = await response.json();

  return data;
};
