import { useContext } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { CardContext } from "./../../context/CardContextProvider";

const CardCreateForm = (task: any) => {
  const { register, handleSubmit } = useForm();
  const { cardsDispatch, cards } = useContext(CardContext);

  const onSubmit = (data: any, e: any) => {
    const id = uuidv4();

    cardsDispatch({
      type: "CREATE_CARD",
      payload: {
        cardName: data.cardName,
        cardId: id,
        listId: task.task.listId,
      },
    });
    e.target.reset();
  };
  return (
    <div>
      <div className="ml-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="mt-2 text-lg font-bold w-48"
            placeholder="Add a card"
            style={{
              borderRadius: "5px",
              border: "none",
            }}
            {...register("cardName", { required: true, maxLength: 20 })}
          />
        </form>
      </div>
    </div>
  );
};

export default CardCreateForm;
