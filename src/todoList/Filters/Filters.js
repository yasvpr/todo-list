import React, { useContext } from 'react';
import classNames from 'classnames';
import css from './Filters.module.css';
import { TodoContext } from '../Todo';
import ActiveTasksLength from './ActiveTasksLength/ActiveTasksLength';
import FilterButton from './FilterButton/FilterButton';

const Filters = () => {
  const context = useContext(TodoContext);
  return (
    <div
      className={classNames(
        !context.theme ? css.filterBoxLight : css.filterBoxDark
      )}>
      <div>
        {/** Good abstraction */}
        <FilterButton name="All" filterName="All" />
        <FilterButton name="Completed" filterName="Dones" />
        <FilterButton name="Active" filterName="Un-Dones" />
      </div>
      {/** Bad abstraction :) */}
      <ActiveTasksLength />
    </div>
  );
};

export default Filters;
