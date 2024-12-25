import { useEffect, useState } from "react";
import TodoList from "./TodoList";

function App() {
  useEffect(() => {
    console.log("App component mounted");
  }, []);
  return (
    <>
      <TodoList />
    </>
  );
}
export default App;
