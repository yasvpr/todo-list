import React from "react";
import css from "./App.module.css";
import Todo from "./todoList/Todo";

const App = () => {
  return (
    <div className={css.app}>
      <Todo />
    </div>
  );
};

export default App;
