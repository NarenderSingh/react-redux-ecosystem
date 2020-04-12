import React from "react";
import { connect } from "react-redux";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import { removeTodo, completeTodo } from "../redux/actions";

const TodoList = ({
  todos = [{ text: "hello" }],
  onRemovePressed,
  onCompletePressed,
}) => (
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

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onCompletePressed: (text) => dispatch(completeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
