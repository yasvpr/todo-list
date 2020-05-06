import React, { useContext } from "react";
import css from "./LoadingGif.module.css";
import { TodoContext } from "../Todo";
import classNames from "classnames";

const LoadingGif = () => {
  const { theme } = useContext(TodoContext);
  return (
    <div className={css.loadingGifBox}>
      <div className={classNames(!theme ? css.loadingGifLight : css.loadingGifDark)}></div>
    </div>
  );
};

export default LoadingGif;
