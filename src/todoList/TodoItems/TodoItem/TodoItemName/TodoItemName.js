import React, { useContext } from 'react';
import css from './TodoItemName.module.css';
import classNames from 'classnames';
import { TodoItemContext } from '../TodoItem';
import { TodoContext } from '../../../Todo';

const TodoItemName = () => {
  const { theme } = useContext(TodoItemContext);
  const { name, done } = useContext(TodoContext);
  // No ! in ternary and ifs
  // It's also frustrating to do theme ? x : y every time over and over again
  // Consider using:
  // * A themable library like tailwindcss or rebassjs or...
  // * Using css variabled for common colors and stuff or...
  // * Changing the root class name and write all css like this:
  // * .rootDark .itemName { color: white }
  // * .rootLight .itemName { color: black }
  return (
    <div
      className={classNames(theme ? css.itemNameDark : css.itemNameLight)}
      style={{
        textDecoration: done ? 'line-through' : 'none',
        color: done && '#fff',
      }}>
      <span
        className={classNames(theme ? css.todoNameDark : css.todoNameLight)}>
        {name}
      </span>
    </div>
  );
};

export default TodoItemName;
