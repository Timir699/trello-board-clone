import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { TaskContext } from "../../context/TaskContextProvider";
import CardCreateForm from "./../cards/CardCreateForm";
import { CardContext } from "./../../context/CardContextProvider";
import CardList from "../cards/CardList";

const TaskItem = (task: any) => {
  const { register, handleSubmit } = useForm();
  const [makeInput, setMakeInput] = useState(true);
  const { tasksDispatch } = useContext(TaskContext);
  const { cards } = useContext(CardContext);

  console.log(cards);
  console.log(task.task.listId);

  const onSubmit = (data: any, e: any) => {
    tasksDispatch({
      type: "UPDATE_TASK",
      payload: { listName: data.listName, listId: task.task.listId },
    });
    if (task) {
      setMakeInput(!makeInput);
    }
    e.target.reset();
  };
  return (
    <>
      <div className="bg-gray-200 pb-6">
        {makeInput ? (
          <div
            onClick={() => setMakeInput(!makeInput)}
            className="bg-gray-200 p-2 font-bold cursor-pointer"
          >
            {task?.task?.listName}
          </div>
        ) : (
          <div className="bg-gray-200 p-2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="mt-2 text-lg font-bold"
                style={{
                  borderRadius: "5px",
                  border: "none",
                  width: "220px",
                }}
                defaultValue={task?.task?.listName}
                {...register("listName", { required: true, maxLength: 20 })}
              />
            </form>
          </div>
        )}
        <div>
          <CardList task={task.task} />
          <CardCreateForm task={task.task} />
        </div>
      </div>
    </>
  );
};

export default TaskItem;
