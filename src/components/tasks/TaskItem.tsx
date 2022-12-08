import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { TaskContext } from "../../context/TaskContextProvider";
import CardCreateForm from "./../cards/CardCreateForm";
import { CardContext } from "./../../context/CardContextProvider";
import CardList from "../cards/CardList";
import { Droppable } from "react-beautiful-dnd";

const TaskItem = (task: any) => {
  const { register, handleSubmit } = useForm();
  const [makeInput, setMakeInput] = useState(true);
  const { tasksDispatch } = useContext(TaskContext);
  const { cards } = useContext(CardContext);

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
      <div className="bg-gray-200 p-4">
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
                className="text-lg font-bold mb-2"
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
          <Droppable droppableId={task.task.listId}>
            {(provided: any) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <CardList task={task.task} />
                <CardCreateForm task={task.task} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </>
  );
};

export default TaskItem;
