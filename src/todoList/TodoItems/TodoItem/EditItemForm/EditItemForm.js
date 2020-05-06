import React, { useContext } from "react";
import classNames from "classnames";
import { TodoContext } from "../../../Todo";
import css from "./EditItemForm.module.css";
import CancelEditItem from "./CancelEditItem/CancelEditItem";
import SaveEditItem from "./SaveEditItem/SaveEditItem";
import EditItemInput from "./EditItemInput/EditItemInput";

const EditItemForm = () => {
  const { theme } = useContext(TodoContext);

  return (
    <div className={classNames(!theme ? css.editFormLight : css.editFormDark)}>
      <EditItemInput />
      <SaveEditItem />
      <CancelEditItem />
    </div>
  );
};

export default EditItemForm;
