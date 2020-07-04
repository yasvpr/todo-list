import React, { useContext } from 'react';
import css from './FilterButton.module.css';
import classNames from 'classnames';
import { TodoContext } from '../../Todo';

const FilterButton = (props) => {
  // Having context provider doesn't mean each and every component should connect to it.
  // You should still consider de-coupling some of them
  const context = useContext(TodoContext);
  return (
    <button
      className={classNames(
        /**
         * Why using ! operator? Keep ternary and ifs as simple as possible
         */
        context.theme ? css.btnDark : css.btnLight,
        {
          /** It's not obvious what this part is doing. consider extracting to a function
           * Or improving the syntax
           */
          [css.activeBtnLight]:
            context.filter === props.filterName && !context.theme,
        },
        {
          [css.activeBtnDark]:
            context.filter === props.filterName && context.theme,
        }
      )}
      onClick={() => context.setFilters(props.filterName)}>
      {props.name}
    </button>
  );
};

export default FilterButton;
