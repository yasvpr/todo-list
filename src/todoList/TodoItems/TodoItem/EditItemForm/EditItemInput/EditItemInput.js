import React, { useContext } from "react";
import { TodoItemContext } from "../../TodoItem";
import css from './EditItemInput.module.css'
import { TodoContext } from "../../../../Todo";
import classNames from 'classnames'

const EditItemInput = () => {
  const context = useContext(TodoItemContext)
  const {theme} = useContext(TodoContext)
  return (
    <input
    className={classNames(!theme ? css.inputLight : css.inputDark)}
      autoFocus
      onFocus={context.handleFocus}
      value={context.inputValue}
      onChange={context.inputChange}
    />
  );
};

export default EditItemInput;
