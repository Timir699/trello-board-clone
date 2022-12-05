import { Button } from "antd";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { BoardContext } from "../context/BoardContextProvider";
import { v4 as uuidv4 } from "uuid";

export type board = {
  id?: any;
  boardName?: string;
  boardListArray?: {};
  cardListArray?: [];
};

const CreateBoardPopUp = (props: { isOpen: boolean; setIsOpen: any }) => {
  const { register, handleSubmit } = useForm();

  const { boards, boardsDispatch } = useContext(BoardContext);

  const onSubmit = (data: any, e: any) => {
    boardsDispatch({ type: "CREATE_BOARD", payload: { name: data.boardName } });

    e.target.reset();
  };
  console.log(boards);

  return (
    <>
      <div
        style={{
          height: "150px",
          width: "200px",
          background: "rgba(0,0,0,.1)",
          position: "fixed",
          zIndex: 1,
          top: "70px",
          left: "52%",
          // opacity: !props.isOpen ? "0" : "1",
          transition: "all .5s",
          // visibility: !props.isOpen ? "hidden" : "visible",
          border: "1px solid #cccccc",
        }}
      >
        <div className="flex">
          <h3 className="mt-2" style={{ alignItems: "center" }}>
            Create Board
          </h3>
          <p
            className="ml-20 mt-2 cursor-pointer"
            onClick={() => props.setIsOpen(false)}
          >
            X
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="mt-2"
            style={{ border: "1px solid blue", borderRadius: "5px" }}
            {...register("boardName", { required: true, maxLength: 20 })}
          />
          <Button
            style={{ color: "#000" }}
            className="mt-4"
            type="primary"
            htmlType="submit"
          >
            Create
          </Button>
        </form>
      </div>
    </>
  );
};

export default CreateBoardPopUp;
