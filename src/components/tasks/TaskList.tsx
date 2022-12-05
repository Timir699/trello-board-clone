import { TaskContext } from "./../../context/TaskContextProvider";
import { useContext } from "react";
import TaskItem from "./TaskItem";
import { useParams } from "react-router-dom";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  const params = useParams();

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {tasks?.map((task: any) => {
          if (params.id === task.boardId) {
            return <TaskItem task={task} />;
          }
        })}
      </div>
    </>
  );
};

export default TaskList;
