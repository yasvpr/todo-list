import React from "react";
import css from "./Todo.module.css";

const TodoListCreatorName = () => {
  return (
    <span className={css.creator}>
      Made By <span>Yasin Valipour</span>
    </span>
  );
};

export default TodoListCreatorName;
