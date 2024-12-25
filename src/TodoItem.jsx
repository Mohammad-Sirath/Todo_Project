import "./TodoItem.css";
import { useEffect } from "react";
function TodoItem(props) {
  useEffect(() => {
    console.log("TodoItem component mounted");
  }, []);
  return (
    <div className="todoItemContainer">
      <p>{props.title}</p>
      <button onClick={props.onRemove}>delete Todo</button>
    </div>
  );
}

export default TodoItem;
