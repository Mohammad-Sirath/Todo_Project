import React, { useState } from "react";
import "./TodoItem.css";
import { Button, Form } from "react-bootstrap";

function TodoItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(props.title);

  const handleEditChange = (e) => {
    setEditTitle(e.target.value);
  };

  const handleEditToggle = () => {
    if (isEditing) {
      // Save the edited title
      props.onEdit(props.id, editTitle);
    }
    setIsEditing(!isEditing); // Toggle edit mode
  };

  return (
    <div className="todoItemContainer mb-4 p-3 border rounded shadow-sm">
      <div className="todoItemContent">
        {isEditing ? (
          <Form.Group controlId="editTodo">
            <Form.Control
              as="textarea"
              rows={3}
              value={editTitle}
              onChange={handleEditChange}
              placeholder="Edit your task here..."
              className="mb-3 custom-textarea" // Added custom class for styling
            />
          </Form.Group>
        ) : (
          <p className="mb-3">{props.title}</p>
        )}
      </div>

      <div className="d-flex justify-content-end gap-2">
        <Button
          variant={isEditing ? "success" : "warning"}
          onClick={handleEditToggle}
          className="w-50"
          style={{
            margin: "5px",
            height: "30px",
            backgroundColor: "#00ff0d",
          }}
        >
          {isEditing ? "Save" : "Edit"}
        </Button>
        <Button
          style={{
            margin: "5px",
            height: "30px",
            backgroundColor: "rgb(247, 122, 83)",
          }}
          variant="danger"
          onClick={props.onRemove}
          className="w-50"
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default TodoItem;
