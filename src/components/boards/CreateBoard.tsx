import { useState } from "react";
import CreateBoardModal from "../../modals/CreateBoardModal";

const CreateBoard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h3 className="mb-8">Create Board</h3>
      <div className="flex" onClick={() => setIsOpen(!isOpen)}>
        <div
          style={{
            height: "100px",
            width: "200px",
            border: "1px solid #cccccc",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <div className="text-xl ">Create a Board</div>
        </div>
      </div>
      {isOpen ? (
        <CreateBoardModal isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : null}
    </>
  );
};

export default CreateBoard;
