import React, { useState, useEffect } from "react";
import "./TodoList.css";
import TodoItem from "../todoItem/TodoItem";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Task 1" },
    { id: 2, title: "Task 2" },
    { id: 3, title: "Task 3" },
  ]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    console.log("TodoList component mounted");
  });

  const addTodoHandler = () => {
    if (newTodo) {
      setTodos([...todos, { id: todos.length + 1, title: newTodo }]);
      setNewTodo(""); // Clear the input field
    }
  };

  const deleteTodoHandler = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const editTodoHandler = (todoId, newTitle) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, title: newTitle } : todo
      )
    );
  };

  return (
    <Container className="mt-4">
      <div className="todo-list-container p-3 shadow rounded">
        <h1 className="text-center mb-4">Todo List</h1>
        <hr />
        <Row className="mb-3 justify-content-center">
          <Col xs={12} md={8}>
            <Form.Group controlId="newTodo">
              <Form.Control
                as="textarea"
                rows={3}
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new task"
                className="mb-3"
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center">
            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Button
                variant="primary"
                onClick={addTodoHandler}
                className="w-75 addBtn"
              >
                Add Todo
              </Button>
            </div>
          </Col>
        </Row>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onRemove={() => deleteTodoHandler(todo.id)}
            onEdit={editTodoHandler}
          />
        ))}
      </div>
    </Container>
  );
}

export default TodoList;
