import React, { useContext } from "react";
import { BoardContext } from "../../context/BoardContextProvider";
import Board from "./Board";

const AllBoards = () => {
  const { boards } = useContext(BoardContext);

  return (
    <>
      <h2 className="mt-4 text-xl">All Boards</h2>
      <div className="mt-4 grid grid-cols-4 gap-4 ">
        {boards.map((board: any) => (
          <Board board={board} key={board.id} />
        ))}
      </div>
    </>
  );
};

export default AllBoards;
