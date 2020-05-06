import React, { useContext } from "react";
import css from "./CancelEditItem.module.css";
import { TodoItemContext } from "../../TodoItem";
const CancelEditItem = () => {
  const { handleCancel } = useContext(TodoItemContext);
  return (
    <button className={css.btn} onClick={handleCancel}>
      Cancel
    </button>
  );
};

export default CancelEditItem;
