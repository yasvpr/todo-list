import React, { useContext } from "react";
import classNames from "classnames";
import { TodoContext } from "../Todo";
import css from "./Switch.module.css";

const Switch = () => {
  const context = useContext(TodoContext);
  return (
    <div className={classNames(!context.theme ? css.switchBoxLight : css.switchBoxDark)}>
      <span style={{ color: !context.theme ? "#2f88ec" : null }}>Light Mode</span>
      <label className={css.switch}>
        <input type="checkbox" onChange={context.switchHandler} />
        <span className={classNames(css.slider, css.round)}></span>
      </label>
      <span style={{ color: context.theme ? "#2f88ec" : null }}>Dark Mode</span>
    </div>
  );
};

export default Switch;
