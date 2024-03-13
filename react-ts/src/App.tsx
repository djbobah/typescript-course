import React, { useState } from "react";
import TodoItem from "./components/TodoItem";

type ITodo = {
  id: string;
  title: string;
  completed: boolean;
};
function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<string[]>([]);
  const [] = useState<ITodo | null>(null);
  return (
    <div className="App">
      <TodoItem
        id="1"
        completed={false}
        title="first todo "
        style={{ border: "1px solid white" }}
      />
    </div>
  );
}

export default App;
