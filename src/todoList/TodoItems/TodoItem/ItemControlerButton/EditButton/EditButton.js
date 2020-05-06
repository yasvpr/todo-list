import React, { useContext } from "react";
import css from "./EditButton.module.css";
import { TodoItemContext } from "../../TodoItem";

const EditButton = () => {
  const { editPressed } = useContext(TodoItemContext);

  return (
    <button className={css.btn} onClick={editPressed}>
      Edit
    </button>
  );
};

export default EditButton;
