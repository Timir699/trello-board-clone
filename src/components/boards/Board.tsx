import { Link } from "react-router-dom";
import { useContext } from "react";
import { BoardContext } from "../../context/BoardContextProvider";

const Board = ({ board }: any) => {
  const { setBoardMenuShow } = useContext(BoardContext);
  return (
    <>
      <p>
        <Link
          to={{
            pathname: `/board/${board.id}`,
          }}
        >
          <div
            onClick={() => setBoardMenuShow(false)}
            style={{
              height: "100px",
              width: "200px",
              border: "1px solid #cccccc",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            <h2>{board.boardName}</h2>
          </div>
        </Link>
      </p>
    </>
  );
};

export default Board;
