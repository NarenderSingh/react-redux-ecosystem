import {
  CREATE_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  LOAD_TODOS_INPROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE,
} from "./actions";

export const todos = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { todo } = payload;
      return state.concat(todo);
    }
    case REMOVE_TODO: {
      // Rename or alias
      const { todo: todoToRemove } = payload;
      console.log("Reducer", todoToRemove);
      return state.filter((todo) => todo.id !== todoToRemove.id);
    }
    case COMPLETE_TODO: {
      const { todo: todoComplete } = payload;
      console.log("Reducer", todoComplete);
      return state.map((todo) => {
        if (todo.id === todoComplete.id) {
          return todoComplete;
        }
        return todo;
      });
    }
    case LOAD_TODOS_SUCCESS: {
      const { todos } = payload;
      return todos;
    }
    case LOAD_TODOS_INPROGRESS:
    case LOAD_TODOS_FAILURE:
    default:
      return state;
  }
};

export const isLoading = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case LOAD_TODOS_INPROGRESS: {
      return true;
    }
    case LOAD_TODOS_SUCCESS:
    case LOAD_TODOS_FAILURE: {
      return false;
    }
    default:
      return state;
  }
};
