import React, {
  useState,
  useCallback,
  useMemo,
  useRef,
  createContext,
} from 'react';
import classNames from 'classnames';
import css from './Todo.module.css';
import Filters from './Filters/Filters';
import Switch from './Switch/Switch';
import LoadingGif from './LoadingGif/LoadingGif';
import AddTodoForm from './AddTodoForm/AddTodoForm';
import TodoItems from './TodoItems/TodoItems';
import TodoListCreatorName from './TodoListCreatorName';

export const TodoContext = createContext();

const Todo = (props) => {
  const idRef = useRef(0);
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('All');
  const [theme, setTheme] = useState(false);

  // Switch what? naming naming naming
  const switchHandler = useCallback(() => {
    setTheme((prevTheme) => !prevTheme);
  }, []);

  const inputChange = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);

  const add = useCallback(
    (todoName) => {
      setTodos((prevTodos) => [
        ...prevTodos,
        { name: todoName, done: false, id: idRef.current++ },
      ]);
    },
    [idRef]
  );

  const addTodoButton = useCallback(() => {
    if (inputValue) {
      add(inputValue);
      setInputValue('');
    }
  }, [add, inputValue]);

  const sendByForm = useCallback(
    (event) => {
      event.preventDefault();
      if (inputValue) {
        add(inputValue);
        setInputValue('');
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

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'All':
        return todos;
      case 'Dones':
        return todos.filter((todo) => todo.done);
      case 'Un-Dones':
        return todos.filter((todo) => !todo.done);
      default:
        return todos;
    }
  }, [filter, todos]);

  // This is not much important, but as you tried to memoize everything in this object
  // That wouldn't be useful if you don't memoize the object itself as well
  const todoContextValue = useMemo(
    () => ({
      switchHandler,
      activeTodos: todos.filter((todo) => !todo.done).length,
      filter,
      setFilters: setFilter,
      theme,
      inputChange,
      inputValue,
      addTodoButton,
      setInputValue,
      sendByForm,
      getTodos: filteredTodos,
      edit,
      toggle,
      deleteTodo,
    }),
    [
      switchHandler,
      todos,
      filter,
      setFilter,
      theme,
      inputChange,
      inputValue,
      addTodoButton,
      setInputValue,
      sendByForm,
      filteredTodos,
      edit,
      toggle,
      deleteTodo,
    ]
  );

  return (
    <TodoContext.Provider value={todoContextValue}>
      <div className={classNames(!theme ? css.light : css.dark)}>
        <Switch />
        <div
          className={classNames(!theme ? css.todoBoxLight : css.todoBoxDark)}>
          <div>
            <h1>To-do list application</h1>
            {/* Eternal loading? :) */}
            <LoadingGif />
            <AddTodoForm />
            <TodoItems />
          </div>
          <Filters />
        </div>
        <TodoListCreatorName />
      </div>
    </TodoContext.Provider>
  );
};

export default Todo;
