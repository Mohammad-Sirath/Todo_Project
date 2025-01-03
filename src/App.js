import React from "react";
import TodoList from "./components/todoList/TodoList";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    console.log("App component mounted");
  }, []);
  return (
    <div>
      <TodoList />
    </div>
  );
}

export default App;
