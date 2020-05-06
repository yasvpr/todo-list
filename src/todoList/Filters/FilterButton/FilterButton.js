import React, { useContext } from "react";
import css from "./FilterButton.module.css";
import classNames from "classnames";
import { TodoContext } from "../../Todo";

const FilterButton = (props) => {
  const context = useContext(TodoContext);
  return (
    <button
      className={classNames(
        !context.theme ? css.btnLight : css.btnDark,
        {
          [css.activeBtnLight]: context.filter === props.filterName && !context.theme,
        },
        {
          [css.activeBtnDark]: context.filter === props.filterName && context.theme,
        }
      )}
      onClick={() => context.setFilters(props.filterName)}
    >
      {props.name}
    </button>
  );
};

export default FilterButton;
