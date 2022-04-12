import { createContext, useContext, useReducer } from "react";
import { todoReducer } from "../reducers/todoReducer";
const todo = createContext();
const useTodo = () => useContext(todo);

const TodoProvider = ({ children }) => {
  const [todoState, todoDispatch] = useReducer(todoReducer, {
    name: "",
    desc: "",
    timer: 0,
  });
  return (
    <todo.Provider value={{ todoState, todoDispatch }}>
      {children}
    </todo.Provider>
  );
};
export { TodoProvider, useTodo };
