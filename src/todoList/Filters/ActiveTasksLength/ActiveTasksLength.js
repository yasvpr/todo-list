import React, { useContext } from 'react';
import css from './ActiveTasksLength.module.css';
import classNames from 'classnames';
import { TodoContext } from '../../Todo';

const ActiveTasksLength = () => {
  const { activeTodos, theme } = useContext(TodoContext);
  return (
    <div>
      <span
        className={classNames(
          theme ? css.activeLengthDark : css.activeLengthLight
        )}>
        {activeTodos} / Active Tasks
      </span>
    </div>
  );
};

export default ActiveTasksLength;
