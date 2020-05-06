import React, { useContext } from "react";
import css from "./ClearInput.module.css";
import { TodoContext } from "../../Todo";

const ClearInput = () => {
  const context = useContext(TodoContext);
  return (
    <span
      onClick={() => context.setInputValue("")}
      className={css.clearInput}
      style={{ display: context.inputValue !== "" ? "flex" : "none" }}
    >
      X
    </span>
  );
};

export default ClearInput;
