import { useContext } from "react";
import { useForm } from "react-hook-form";
import { isAsteriskToken } from "typescript";
import { v4 as uuidv4 } from "uuid";
import { CardContext } from "./../../context/CardContextProvider";
import { Draggable, Droppable } from "react-beautiful-dnd";

const CardList = (task: any) => {
  const { register, handleSubmit } = useForm();
  const { cards, cardsDispatch } = useContext(CardContext);
  // console.log(cards);
  // console.log(task.task.listId);

  const onSubmit = (data: any, e: any) => {
    const id = uuidv4();

    // tasksDispatch({
    //   type: "CREATE_TASK",
    //   payload: { listName: data.listName, listId: id, boardId: params.id },
    // });

    e.target.reset();
  };
  return (
    <>
      <div>
        {cards
          .filter((card: any) => card.listId === task.task.listId)
          .map((card: any, index: any) => {
            return (
              <Draggable
                key={card.cardId}
                draggableId={card.cardId.toString()}
                index={index}
              >
                {(provided: any) => (
                  <div
                    key={card.cardId}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="ml-4 bg-white mb-2 w-48 p-2 cursor-pointer"
                  >
                    <h2>{card.cardName}</h2>
                  </div>
                )}
              </Draggable>
            );
          })}
      </div>
    </>
  );
};

export default CardList;
