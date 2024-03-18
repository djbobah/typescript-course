import React, { useState } from "react";
// import TodoItem from "./components/TodoItem";
import NewTodoForm from "./components/NewTodoForm";
import { Todo } from "./types";
import "./App.css";
import TodoList from "./components/TodoList";

// type ITodo = {
//   id: string;
//   title: string;
//   completed: boolean;
// };
function App() {
  // const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  // const [] = useState<ITodo | null>(null);

  // const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setText(event.target.value);
  // };
  // const addTodo = () => {
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: new Date().toString(),
      title: text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
    // setText("");
  };
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((res) => res.json())
  //     .then((data: Todo[]) => setTodos(data));
  // }, []);
  const toggleTodo = (id: Todo["id"]) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return { ...todo, completed: !todo.completed };
      })
    );
  };
  const removeTodo = (id: Todo["id"]) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <NewTodoForm handleClick={addTodo} />
      {/* value={text} onChange={handleInput} */}
      <TodoList list={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
      {/* <TodoItem
        id="1"
        completed={false}
        title="first todo "
        style={{ border: "1px solid white", listStyleType: "none" }}
      /> */}
    </div>
  );
}

export default App;
