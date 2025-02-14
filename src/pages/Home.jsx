import TodoProvider from "../components/provider/TodoProvider";
import TodoContainer from "../components/todo/TodoContainer";

const Home = () => {
  return (
    <TodoProvider>
      <TodoContainer />
    </TodoProvider>
  );
};

export default Home;
