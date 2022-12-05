import AllBoards from "./AllBoards";
import CreateBoard from "./CreateBoard";

const Boards = () => {
  return (
    <div className="ml-32 mt-8">
      <CreateBoard />
      <AllBoards />
    </div>
  );
};

export default Boards;
