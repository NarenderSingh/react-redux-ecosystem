import {
  CREATE_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  LOAD_TODOS_INPROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE,
} from "./actions";

const initialState = {
  isLoading: false,
  data: [],
};

export const todos = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { todo } = payload;
      return { ...state, data: state.data.concat(todo) };
    }
    case REMOVE_TODO: {
      // Rename or alias
      const { todo: todoToRemove } = payload;
      console.log("Reducer", todoToRemove);
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== todoToRemove.id),
      };
    }
    case COMPLETE_TODO: {
      const { todo: todoComplete } = payload;
      console.log("Reducer", todoComplete);
      return {
        ...state,
        data: state.data.map((todo) => {
          if (todo.id === todoComplete.id) {
            return todoComplete;
          }
          return todo;
        }),
      };
    }
    case LOAD_TODOS_SUCCESS: {
      const { todos } = payload;
      return {
        ...state,
        isLoading: false,
        data: todos,
      };
    }
    case LOAD_TODOS_INPROGRESS:
    case LOAD_TODOS_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};
