import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { TaskContext } from "../../context/TaskContextProvider";
import TaskList from "./TaskList";

const TaskCreateForm = (selectedBoard: any) => {
  const { register, handleSubmit } = useForm();
  const [makeInput, setMakeInput] = useState<boolean>(false);
  const [task, setTask] = useState({});
  const { tasksDispatch } = useContext(TaskContext);

  const params = useParams();

  const onSubmit = (data: any, e: any) => {
    const id = uuidv4();
    setTask({
      taskName: data.listName,
      boardId: params.id,
      listId: id,
    });
    tasksDispatch({
      type: "CREATE_TASK",
      payload: { listName: data.listName, listId: id, boardId: params.id },
    });
    if (task) {
      setMakeInput(!makeInput);
    }
    e.target.reset();
  };

  return (
    <>
      <div
        style={{
          height: "auto",
          width: "220px",
          background: "rgba(0,0,0,.1)",
          zIndex: 1,
          border: "1px solid #cccccc",
        }}
        className="p-2"
      >
        <p>Create a list</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="mt-2 text-lg font-bold w-48"
            style={{
              borderRadius: "5px",
              border: "none",
            }}
            {...register("listName", { required: true, maxLength: 20 })}
          />
        </form>
      </div>
      <div className="mt-8">
        <TaskList />
      </div>
    </>
  );
};

export default TaskCreateForm;
