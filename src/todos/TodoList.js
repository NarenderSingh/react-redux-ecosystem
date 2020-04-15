import React, { useEffect } from "react";
import { connect } from "react-redux";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import {
  loadTodos,
  removeTodoRequest,
  completeTodoRequest,
} from "../redux/thunk";
import {
  getTodos,
  getTodosLoading,
  getCompletedTodos,
  getIncompleteTodos,
} from "../redux/selector";

const TodoList = ({
  todos = [],
  isloading,
  completedTodos,
  inCompletedTodos,
  onRemovePressed,
  onCompletePressed,
  startLoadingTodos,
}) => {
  useEffect(() => {
    console.log("use effect");
    startLoadingTodos();
  }, []);

  const loadingMessage = <div>Loading...</div>;
  const content = (
    <div className="card card-body">
      <NewTodoForm />
      <hr />
      <h3>Incomplete :</h3>
      {inCompletedTodos.map((todo, i) => (
        <TodoListItem
          key={i}
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletePressed={onCompletePressed}
        />
      ))}
      <hr />
      <h3>Completed :</h3>
      {completedTodos.map((todo, i) => (
        <TodoListItem
          key={i}
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletePressed={onCompletePressed}
        />
      ))}
    </div>
  );

  return isloading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  // todos: getTodos(state),
  completedTodos: getCompletedTodos(state),
  inCompletedTodos: getIncompleteTodos(state),
  isLoading: getTodosLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onCompletePressed: (id) => dispatch(completeTodoRequest(id)),
  startLoadingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
