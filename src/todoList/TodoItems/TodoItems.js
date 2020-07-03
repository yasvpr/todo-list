import React, { useContext } from 'react';
import { TodoContext } from '../Todo';
import TodoItem from './TodoItem/TodoItem';
import css from './TodoItems.module.css';
import classNames from 'classnames';

const TodoItems = () => {
  const context = useContext(TodoContext);
  return (
    <div
      className={classNames(
        !context.theme ? css.itemBoxLight : css.itemBoxDark
      )}>
      {context.getTodos.length === 0 ? (
        <p className={css.nothing}>There is nothing to do !</p>
      ) : (
        <ul>
          {context.getTodos.map((todo) => (
            /**
             * Not so good. if you have extracted the unrelated context values to another
             * Context Provider, you were able to only pass those here.
             * All of a sudden what happened to the switchHandler in the provider?
             */
            /**
             * Also I feel like you're overusing the context a lot. I can't see any reason
             * For passing todo as a context instead of passing it directly to a TodoItem
             * BTW it's what TodoItem does. rendering a todo.
             * Isn't that wierd that it doesn't accept a todo as the prop?
             */
            <TodoContext.Provider
              value={{
                ...todo,
                onToggle: () => context.toggle(todo.id),
                onDelete: () => context.deleteTodo(todo.id),
                onEdit: (newTodoName) => context.edit(newTodoName, todo.id),
                theme: context.theme,
              }}>
              <TodoItem key={todo.id.toString()} />
            </TodoContext.Provider>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoItems;
