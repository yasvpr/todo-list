import React, { useContext } from "react";
import classNames from 'classnames'
import css from './ToggleButton.module.css'
import { TodoContext } from "../../../../Todo";
const ToggleButton = () => {
  const context = useContext(TodoContext)
  return (
    <button
      className={classNames(
        { [css.btnDone]: !context.done },
        { [css.btnUnDone]: context.done }
      )}
      onClick={context.onToggle}
    >
      {context.done ? "Active" : "Complete"}
    </button>
  );
};

export default ToggleButton;
