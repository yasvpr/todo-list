import React, { useState, useCallback, useMemo, createContext } from "react";
import classNames from "classnames";
import css from "./Todo.module.css";
import Filters from "./Filters/Filters";
import Switch from "./Switch/Switch";
import LoadingGif from "./LoadingGif/LoadingGif";
import AddTodoForm from "./AddTodoForm/AddTodoForm";
import TodoItems from "./TodoItems/TodoItems";
import CreaterName from "./CreaterName";

export const TodoContext = createContext();

const Todo = (props) => {
  let id = 0;
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("All");
  const [theme, setTheme] = useState(false);

  const switchHandler = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  const inputChange = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);

  const add = useCallback(
    (todoName) => {
      setTodos((prevTodos) => [...prevTodos, { name: todoName, done: false, id: id++ }]);
    },
    [id]
  );

  const addTodoButton = useCallback(() => {
    if (inputValue) {
      add(inputValue);
      setInputValue("");
    }
  }, [add, inputValue]);

  const sendByForm = useCallback(
    (event) => {
      event.preventDefault();
      if (inputValue) {
        add(inputValue);
        setInputValue("");
      }
    },
    [add, inputValue]
  );

  const deleteTodo = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  const toggle = useCallback((id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) return { ...todo, done: !todo.done };
        else return todo;
      })
    );
  }, []);
  const edit = useCallback((newTodoName, id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) => {
        if (todo.id === id) return { ...todo, name: newTodoName };
        else return todo;
      })
    );
  }, []);

  const getTodos = useMemo(() => {
    switch (filter) {
      case "All":
        return todos;
      case "Dones":
        return todos.filter((todo) => todo.done);
      case "Un-Dones":
        return todos.filter((todo) => !todo.done);
      default:
        return todos;
    }
  }, [filter, todos]);

  const setFilters = useCallback((filterName) => {
    setFilter(filterName);
  }, []);

  return (
    <TodoContext.Provider
      value={{
        switchHandler,
        activeTodos: todos.filter((todo) => !todo.done).length,
        filter,
        setFilters: (filterName) => setFilters(filterName),
        theme,
        inputChange,
        inputValue,
        addTodoButton,
        setInputValue,
        sendByForm,
        getTodos,
        edit,
        toggle,
        deleteTodo,
      }}
    >
      <div className={classNames(!theme ? css.light : css.dark)}>
        <Switch />
        <div className={classNames(!theme ? css.todoBoxLight : css.todoBoxDark)}>
          <div>
            <h1>To-do list application</h1>
            <LoadingGif />
            <AddTodoForm />
            <TodoItems />
          </div>
          <Filters />
        </div>
        <CreaterName />
      </div>
    </TodoContext.Provider>
  );
};

export default Todo;
