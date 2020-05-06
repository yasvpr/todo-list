import React, { useContext } from "react";
import css from "./SaveEditItem.module.css";
import { TodoItemContext } from "../../TodoItem";

const SaveEditItem = () => {
  const { handleSave } = useContext(TodoItemContext);
  return (
    <button className={css.btn} onClick={handleSave}>
      Save
    </button>
  );
};

export default SaveEditItem;
