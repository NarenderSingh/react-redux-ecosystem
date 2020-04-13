import React, { useEffect } from "react";
import { connect } from "react-redux";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import {
  loadTodos,
  removeTodoRequest,
  completeTodoRequest,
} from "../redux/thunk";

const TodoList = ({
  todos = [],
  isloading,
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
      {todos.map((todo, i) => (
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
  todos: state.todos,
  isLoading: state.isloading,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onCompletePressed: (id) => dispatch(completeTodoRequest(id)),
  startLoadingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
