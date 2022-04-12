import { createContext, useContext, useReducer } from "react";
import { taskReducer } from "../reducers/taskReducer";

const task = createContext();
const useTask = () => useContext(task);
const TaskProvider = ({ children }) => {
  const [taskState, taskDispatch] = useReducer(taskReducer, {
    taskList: [],
  });
  return (
    <task.Provider value={{ taskState, taskDispatch }}>
      {children}
    </task.Provider>
  );
};
export { useTask, TaskProvider };
