import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home";
import TodoDetail from "./pages/TodoDetail";
import QueryProvider from "./components/provider/QueryProvider";

const App = () => {
  return (
    <BrowserRouter>
      <QueryProvider>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="todos/:id" element={<TodoDetail />} />
          </Route>
        </Routes>
      </QueryProvider>
    </BrowserRouter>
  );
};

export default App;
