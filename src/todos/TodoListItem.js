import React from "react";

const TodoListItem = ({ todo, onRemovePressed, onCompletePressed }) => (
  <div className="list-group">
    <li className="list-group-item">
      <div className="row">
        <div className="col-sm-2">
          {todo.isCompleted ? null : (
            <button
              onClick={() => onCompletePressed(todo.id)}
              className="btn btn-primary btn-sm"
            >
              <i className="fa fa-check"></i>
            </button>
          )}
          <button
            onClick={() => onRemovePressed(todo.id)}
            className="btn btn-warning btn-sm ml-1"
          >
            <i className="fa fa-times"></i>
          </button>
        </div>
        <div className="col-sm-4">
          <p>{todo.text}</p>
        </div>
      </div>
    </li>
  </div>
);

export default TodoListItem;
