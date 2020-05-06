import React, { useContext } from "react";
import css from "./DeleteButton.module.css";
import { TodoContext } from "../../../../Todo";
const DeleteButton = () => {
  const { onDelete } = useContext(TodoContext);
  return (
    <button className={css.btn} onClick={onDelete}>
      Delete
    </button>
  );
};

export default DeleteButton;
