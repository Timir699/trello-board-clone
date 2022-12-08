import { TaskContext } from "./../../context/TaskContextProvider";
import { useContext } from "react";
import TaskItem from "./TaskItem";
import { useParams } from "react-router-dom";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  const params = useParams();

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {tasks
          ?.filter((task: any) => {
            return params.id === task.boardId;
          })
          .map((task: any, index: any) => (
            <TaskItem key={index} task={task} />
          ))}
      </div>
    </>
  );
};

export default TaskList;
