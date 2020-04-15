import { createSelector } from "reselect";

export const getTodos = (state) => state.todos.data;
export const getTodosLoading = (state) => state.todos.isLoading;

export const getIncompleteTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => !todo.isCompleted)
);

export const getCompletedTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => todo.isCompleted)
);

//memorization
//this will call everytime when render changes
//but createSelector executes only when input parameters changes
//reselect are pure function
// export const getCompletedTodos = (state) => {
//   return state.todos.filter((todo) => todo.isCompleted);
// };

export const getIncompleteTodosMultiSelector = createSelector(
  getTodos,
  getTodosLoading,
  (todos, isLoading) =>
    isLoading ? [] : todos.filter((todo) => !todo.isCompleted)
);
