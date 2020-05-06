import React, { useContext } from "react";
import classNames from "classnames";
import css from "./AddTaskButton.module.css";
import { TodoContext } from "../../Todo";

const AddTaskButton = () => {
  const { theme, addTodoButton } = useContext(TodoContext);
  return (
    <button
      className={classNames(
        !theme ? css.btnLight : css.btnDark,
        !theme ? css.addTodoBtnLight : css.addTodoBtnDark
      )}
      onClick={addTodoButton}
    >
      Add Task
    </button>
  );
};
export default AddTaskButton;
