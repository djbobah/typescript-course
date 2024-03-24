import { Todo } from "types";
import TodoItem from "components/TodoItem";
import { useAppDispatch, useAppSelector } from "redux-hook";
import { removeTodo, toggleTodo } from "./todoSlice";
import { selectAllTodos } from "./todoSelectors";
import { useSelector } from "react-redux";
import { selectAsyncTodos } from "./AsyncTodoSelector";
import { useEffect } from "react";
import { fetchAllTodos } from "./todoAsyncActions";

//

const AsyncTodoList = () => {
  const { list } = useSelector(selectAsyncTodos);
  const dispatch = useAppDispatch();
  const handleRemoveTodo = (id: Todo["id"]) => {
    dispatch(removeTodo(id));
  };
  const handleToggleTodo = (id: Todo["id"]) => {
    dispatch(toggleTodo(id));
  };

  useEffect(() => {
    dispatch(fetchAllTodos());
  }, []);

  return (
    <ul>
      {list.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          removeTodo={handleRemoveTodo}
          toggleTodo={handleToggleTodo}
        />
      ))}
    </ul>
  );
};

export default AsyncTodoList;
