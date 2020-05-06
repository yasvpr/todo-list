import React, { useContext } from "react";
import classNames from "classnames";
import { TodoContext } from "../Todo";
import css from "./AddTodoForm.module.css";
import ClearInpout from "./ClearInput/ClearInput";
import AddTaskButton from "./AddTaskButton/AddTaskButton";
import AddTodoInput from "./AddTodoInput/AddTodoInput";

const AddTodoForm = () => {
  const context = useContext(TodoContext);
  return (
    <div className={classNames(!context.theme ? css.AddTodoFormLight : css.AddTodoFormDark)}>
      <form
        onSubmit={context.sendByForm}
        className={classNames(!context.theme ? css.justInputLight : css.justInputDark)}
      >
        <AddTodoInput />
        <ClearInpout />
      </form>
      <AddTaskButton />
    </div>
  );
};

export default AddTodoForm;
