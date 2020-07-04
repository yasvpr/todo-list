import React, { useContext } from 'react';
import classNames from 'classnames';
import { TodoContext } from '../../../Todo';
import css from './EditItemForm.module.css';
import CancelEditItem from './CancelEditItem/CancelEditItem';
import SaveEditItem from './SaveEditItem/SaveEditItem';
import EditItemInput from './EditItemInput/EditItemInput';

const EditItemForm = () => {
  const { theme } = useContext(TodoContext);

  // Bad abstractions
  // Assume you want to make save and cancel disabled based on the value in the editItemInput
  // It will be a huge mess. don't over abstract things
  return (
    <div className={classNames(!theme ? css.editFormLight : css.editFormDark)}>
      {/* No */}
      <EditItemInput />
      {/* No */}
      <SaveEditItem />
      {/* No */}
      <CancelEditItem />
    </div>
  );
};

export default EditItemForm;
