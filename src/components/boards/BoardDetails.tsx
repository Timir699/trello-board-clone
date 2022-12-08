import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import List from "../tasks/TaskCreateForm";
import { useForm } from "react-hook-form";
import { BoardContext } from "../../context/BoardContextProvider";
import Tasks from "../tasks/TaskCreateForm";
import { DragDropContext } from "react-beautiful-dnd";
import { CardContext } from "./../../context/CardContextProvider";
import { TaskContext } from "./../../context/TaskContextProvider";

const Lists = () => {
  const [makeInput, setMakeInput] = useState<boolean>(false);
  const { register, handleSubmit } = useForm();
  const { boards, boardsDispatch } = useContext(BoardContext);

  const { tasks, tasksDispatch } = useContext(TaskContext);
  const { cards, cardsDispatch } = useContext(CardContext);

  const params = useParams();

  const selectedBoard: any = boards.find(
    (board: any) => board?.id === params?.id
  );

  const onSubmit = (data: any, e: any) => {
    boardsDispatch({
      type: "UPDATE_BOARD",
      payload: { boardName: data.boardName, id: selectedBoard.id },
    });

    if (boards) {
      setMakeInput(!makeInput);
    }
    e.target.reset();
  };
  const onDragEnd = (result: any) => {
    console.log(result);
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }
    const cardToAdd = cards.find((card: any) => card.cardId === draggableId);

    if (destination.droppableId !== source.droppableId) {
      cardsDispatch({
        type: "REMOVE_LIST_ID_FROM_CARD",
        payload: {
          listId: source.droppableId,
          cardId: draggableId,
        },
      });

      cardsDispatch({
        type: "ADD_LIST_ID_TO_CARD",
        payload: {
          listId: destination.droppableId,
          cardId: draggableId,
          card: cardToAdd,
        },
      });
      cardsDispatch({
        type: "SORT_CARD_ID",
        payload: {
          destinationIndex: destination.index,
          sourceIndex: source.index,
          droppableId: source.droppableId,
        },
      });
    }
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        {makeInput ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="mt-2 text-lg font-bold w-48"
              style={{
                borderRadius: "5px",
                border: "none",
              }}
              defaultValue={selectedBoard?.boardName}
              {...register("boardName", { required: true, maxLength: 20 })}
            />
          </form>
        ) : (
          <div
            onClick={() => setMakeInput(!makeInput)}
            className="pb-4 text-xl font-bold"
          >
            <h2>{selectedBoard?.boardName}</h2>
          </div>
        )}

        <Tasks selectedBoard={selectedBoard} />
      </DragDropContext>
    </>
  );
};

export default Lists;
