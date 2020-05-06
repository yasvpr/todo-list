import React, { useContext } from "react";
import { TodoContext } from "../Todo";
import TodoItem from "./TodoItem/TodoItem";
import css from "./TodoItems.module.css";
import classNames from "classnames";

const TodoItems = () => {
  const context = useContext(TodoContext);
  return (
    <div className={classNames(!context.theme ? css.itemBoxLight : css.itemBoxDark)}>
      {context.getTodos.length === 0 ? (
        <p className={css.nothing}>There is nothing to do !</p>
      ) : (
        <ul>
          {context.getTodos.map((todo) => (
            <TodoContext.Provider
              value={{
                ...todo,
                onToggle: () => context.toggle(todo.id),
                onDelete: () => context.deleteTodo(todo.id),
                onEdit: (newTodoName) => context.edit(newTodoName, todo.id),
                theme: context.theme,
              }}
            >
              <TodoItem key={todo.id.toString()} />
            </TodoContext.Provider>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoItems;
