import React from "react";
import { hot } from "react-hot-loader";
import TodoList from "./todos/TodoList";

const App = () => (
  <div className="container mt-5" style={{ width: "700px" }}>
    <TodoList />
  </div>
);

export default hot(module)(App);
