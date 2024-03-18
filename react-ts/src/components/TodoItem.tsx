import React from "react";
import { Todo } from "../types";

interface TodoItemProps extends Todo {
  // children: React.ReactNode;
  toggleTodo: (id: Todo["id"]) => void;
  removeTodo: (id: Todo["id"]) => void;
  style?: React.CSSProperties;
}

const TodoItem = ({
  id,
  title,
  completed,
  toggleTodo,
  removeTodo,
  style = {},
}: TodoItemProps) => {
  return (
    <li style={style}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <span>{title}</span>
      <span style={{ color: "red" }} onClick={() => removeTodo(id)}>
        &times;
      </span>
      {/* {children} */}
    </li>
  );
};

export default TodoItem;
