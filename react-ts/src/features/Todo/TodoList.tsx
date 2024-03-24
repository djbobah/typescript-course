import { Todo } from "types";
import TodoItem from "components/TodoItem";
import { useAppDispatch, useAppSelector } from "redux-hook";
import { removeTodo, toggleTodo } from "./todoSlice";
import { selectAllTodos } from "./todoSelectors";
import { useSelector } from "react-redux";

//

const TodoList = () => {
  const list = useSelector(selectAllTodos);
  const dispatch = useAppDispatch();
  const handleRemoveTodo = (id: Todo["id"]) => {
    dispatch(removeTodo(id));
  };
  const handleToggleTodo = (id: Todo["id"]) => {
    dispatch(toggleTodo(id));
  };

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

export default TodoList;
