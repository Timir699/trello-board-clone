import { createContext, useReducer, useState } from "react";
import { boardReducer } from "../reducers/board";

type Props = {
  children?: React.ReactNode;
};
export const BoardContext = createContext<any>(null);

const BoardContextProvider = ({ children }: Props) => {
  const [boards, boardsDispatch] = useReducer(boardReducer, []);
  const [boardMenuShow, setBoardMenuShow] = useState<boolean>(true);

  const values = {
    boardMenuShow,
    setBoardMenuShow,
    boards,
    boardsDispatch,
  };
  return (
    <BoardContext.Provider value={values}>{children}</BoardContext.Provider>
  );
};

export default BoardContextProvider;
