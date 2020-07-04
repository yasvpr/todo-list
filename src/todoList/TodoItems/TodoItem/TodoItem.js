import React, { useState, useCallback, useContext, createContext } from 'react';
import css from './TodoItem.module.css';
import { TodoContext } from '../../Todo';
import EditItemForm from './EditItemForm/EditItemForm';
import Item from './Item/Item';
export const TodoItemContext = createContext();

const TodoItem = () => {
  const context = useContext(TodoContext);
  //  States
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState('');
  // Fonctions
  const inputChange = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);
  const editPressed = () => {
    setInputValue(context.name);
    setEditing(true);
  };
  const handleSave = () => {
    context.onEdit(inputValue);
    setEditing(false);
  };
  const handleCancel = useCallback(() => {
    setEditing(false);
    setInputValue('');
  }, []);
  const handleFocus = useCallback((event) => {
    event.currentTarget.select();
  }, []);
  /**
   * Provider is a no-no
   * You can also name <Item /> better
   * And also <EditItemForm /> is more <EditTodoForm />
   */
  return (
    <TodoItemContext.Provider
      value={{
        editPressed,
        handleFocus,
        handleCancel,
        handleSave,
        inputChange,
        inputValue,
      }}>
      <div className={css.editBox}>{editing ? <EditItemForm /> : <Item />}</div>
    </TodoItemContext.Provider>
  );
};
export default TodoItem;
