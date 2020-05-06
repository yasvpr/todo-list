import React, { useContext } from "react";
import { TodoContext } from "../../../Todo";
import css from './Item.module.css'
import classNames from "classnames"
import TodoItemName from "../TodoItemName/TodoItemName";
import ItemControlerButton from "../ItemControlerButton/ItemControlerButton";

const Item = () => {
  const { done,theme } = useContext(TodoContext);
  return (
    <li
      className={classNames(!theme ? css.itemLight : css.itemDark, {
        [css.doneTodo]: done,
      })}
    >
      <TodoItemName />
      <ItemControlerButton />
    </li>
  );
};
export default Item;
