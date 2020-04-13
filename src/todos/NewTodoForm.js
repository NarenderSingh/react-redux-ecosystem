import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodoRequest } from "../redux/thunk";

const NewTodoForm = ({ todos, onCreatePressed, onRemovePressed }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="card card-body">
      <input
        type="text"
        className="form-control col-sm-4"
        placeholder="Type your new todo here..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          const isDuplicateText = todos.some(
            (todo) => todo.text === inputValue
          );

          if (!isDuplicateText) {
            onCreatePressed(inputValue);
            setInputValue("");
          }
        }}
        className="btn btn-primary btn-sm col-sm-2 mt-1"
      >
        Create Todo
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
