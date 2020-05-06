import React, { useContext } from "react";
import classNames from "classnames";
import css from "./AddTodoInput.module.css";
import { TodoContext } from "../../Todo";

const AddTodoInput = () => {
  const context = useContext(TodoContext);
  return (
    <input
      className={classNames(!context.theme ? css.inputLight : css.inputDark)}
      onChange={context.inputChange}
      type="text"
      value={context.inputValue}
      placeholder="Add a new task"
    />
  );
};

export default AddTodoInput;
