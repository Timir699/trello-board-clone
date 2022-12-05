import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import List from "../tasks/TaskCreateForm";
import { useForm } from "react-hook-form";
import { BoardContext } from "../../context/BoardContextProvider";
import Tasks from "../tasks/TaskCreateForm";

const Lists = () => {
  const [makeInput, setMakeInput] = useState<boolean>(false);
  const { register, handleSubmit } = useForm();
  const { boards, boardsDispatch } = useContext(BoardContext);

  const params = useParams();

  const selectedBoard: any = boards.find(
    (board: any) => board?.id === params?.id
  );
  console.log(selectedBoard);

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

  return (
    <>
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
    </>
  );
};

export default Lists;
