import { v4 as uuidv4 } from "uuid";

export const boardReducer = (boards: any, action: any) => {
  switch (action.type) {
    case "CREATE_BOARD": {
      const board = {
        boardName: action.payload.name,
        id: uuidv4(),
        taskList: [],
        cardList: [],
      };
      return [...boards, board];
    }
    case "UPDATE_BOARD": {
      const updatedBoard = boards.find(
        (board: any) => board.id === action.payload.id
      );
      boards.map((board: any) => {
        if (updatedBoard.id === board.id) {
          board.boardName = action.payload.boardName;
        }
        return board;
      });
    }
  }

  return boards;
};
