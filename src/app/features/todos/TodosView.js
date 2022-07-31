import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "./todosSlice";

const TodosView = () => {
  const { isLoading, todos, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  console.log(todos);
  return (
    <div>
      {isLoading && <h4>Loading...</h4>}
      {error && <h4>{error.message}</h4>}
      {todos && todos.map((todo) => <h3>{todo.title}</h3>)}
    </div>
  );
};

export default TodosView;
