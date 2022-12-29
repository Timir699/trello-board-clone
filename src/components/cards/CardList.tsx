import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { isAsteriskToken } from "typescript";
import { v4 as uuidv4 } from "uuid";
import { CardContext } from "./../../context/CardContextProvider";
import { Draggable, Droppable } from "react-beautiful-dnd";
import CardDetailsModal from "../../modals/CardDetailsModal";

const CardList = (task: any) => {
  const { register, handleSubmit } = useForm();
  const { cards, cardsDispatch } = useContext(CardContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = (data: any, e: any) => {
    const id = uuidv4();

    // tasksDispatch({
    //   type: "CREATE_TASK",
    //   payload: { listName: data.listName, listId: id, boardId: params.id },
    // });

    e.target.reset();
  };
  const onClickHandler = (e: any) => {
    setIsModalOpen(false);
    console.log(e.currentTarget);
  };
  return (
    <>
      <div>
        {cards
          .filter((card: any) => card.listId === task.task.listId)
          .map((card: any, index: any) => {
            return (
              <div>
                <CardDetailsModal
                  visible={isModalOpen}
                  handleCancel={onClickHandler}
                  title={card.cardName}
                  description={card.description}
                  centered={true}
                  width={700}
                />
                <Draggable
                  key={card.cardId}
                  draggableId={card.cardId.toString()}
                  index={index}
                >
                  {(provided: any) => (
                    <div
                      onClick={() => setIsModalOpen(true)}
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
              </div>
            );
          })}
      </div>
    </>
  );
};

export default CardList;
