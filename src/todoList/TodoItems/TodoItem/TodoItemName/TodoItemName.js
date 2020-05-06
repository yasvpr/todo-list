import React, { useContext } from "react";
import css from "./TodoItemName.module.css";
import classNames from "classnames";
import { TodoItemContext } from "../TodoItem";
import { TodoContext } from "../../../Todo";

const TodoItemName = () => {
  const { theme } = useContext(TodoItemContext);
  const { name, done } = useContext(TodoContext);
  return (
    <div
      className={classNames(!theme ? css.itemNameLight : css.itemNameDark)}
      style={{
        textDecoration: done ? "line-through" : "none",
        color: done && "#fff",
      }}
    >
      <span className={classNames(!theme ? css.todoNameLight : css.todoNameDark)}>{name}</span>
    </div>
  );
};

export default TodoItemName;
