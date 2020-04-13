import {
  loadTodosInprogress,
  loadTodosSuccess,
  loadTodosFailure,
  createTodo,
  removeTodo,
  completeTodo,
} from "../redux/actions";

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInprogress());

    const response = await fetch("http://localhost:9999/todos");
    const todos = await response.json();
    console.log("TODOS", todos);

    dispatch(loadTodosSuccess(todos));
  } catch (e) {
    dispatch(loadTodosFailure(e));
  }
};

export const addTodoRequest = (text) => async (dispatch) => {
  try {
    const body = JSON.stringify({ text });
    const response = await fetch("http://localhost:9999/todos", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body,
    });

    const todo = await response.json();
    dispatch(createTodo(todo));
  } catch (e) {}
};

export const removeTodoRequest = (id) => async (dispatch) => {
  console.log("ID", id);
  try {
    const response = await fetch(`http://localhost:9999/todos/${id}`, {
      method: "delete",
    });

    const todo = await response.json();
    console.log("REMOVE TODO", todo);
    dispatch(removeTodo(todo));
  } catch (e) {
    console.log("SYSTEM ERROR", e);
  }
};

export const completeTodoRequest = (id) => async (dispatch) => {
  console.log("ID", id);
  try {
    const response = await fetch(
      `http://localhost:9999/todos/${id}/completed`,
      {
        method: "Post",
      }
    );

    const todo = await response.json();
    console.log("COMPLETE TODO", todo);
    dispatch(completeTodo(todo));
  } catch (e) {}
};
