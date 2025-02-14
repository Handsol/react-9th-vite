import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home";
import TodoDetail from "./pages/TodoDetail";
import TodoProvider from "./components/provider/TodoProvider";

const App = () => {
  return (
    <TodoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="todos/:id" element={<TodoDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TodoProvider>
  );
};

export default App;
