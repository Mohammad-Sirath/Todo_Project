import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

function TodoList(props) {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Task 1",
    },
    {
      id: 2,
      title: "Task 2",
    },
    {
      id: 3,
      title: "Task 3",
    },
    {
      id: 4,
      title: "Task 4",
    },
  ]);
  const [newTodo, setNewTodo] = useState("");
  const addHandler = () => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        title: newTodo,
      },
    ]);
  };
  const deleteTodo = (todoId) => {
    let newTodoList = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodoList);
  };
  useEffect(() => {
    console.log("TodoList component mounted");
  }, []);
  return (
    <div className="todoListContainer">
      <h1>TodoList</h1>
      <hr />
      <div className="addTodoContainer">
        <input type="text" onChange={(e) => setNewTodo(e.target.value)} />
        <button onClick={addHandler}>Add Todo</button>
      </div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          onRemove={() => deleteTodo(todo.id)}
        />
      ))}
    </div>
  );
}

export default TodoList;
