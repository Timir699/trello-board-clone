import { createContext, useReducer } from "react";
import { taskReducer } from "../reducers/task";

export const TaskContext = createContext<any>(null);

const TaskContextProvider = ({ children }: any) => {
  const [tasks, tasksDispatch] = useReducer(taskReducer, []);

  const values = {
    tasks,
    tasksDispatch,
  };
  return <TaskContext.Provider value={values}>{children}</TaskContext.Provider>;
};

export default TaskContextProvider;
