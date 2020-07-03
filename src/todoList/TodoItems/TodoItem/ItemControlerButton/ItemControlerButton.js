import React from 'react';
import css from './ItemControlerButton.module.css';
import EditButton from './EditButton/EditButton';
import DeleteButton from './DeleteButton/DeleteButton';
import ToggleButton from './ToggleButton/ToggleButton';

const ItemControlerButton = () => {
  return (
    <div className={css.controlerBtn}>
      {/* I think I've made my point clear. NO OVER ABSTRACTION */}
      <ToggleButton />
      <EditButton />
      <DeleteButton />
    </div>
  );
};

export default ItemControlerButton;
