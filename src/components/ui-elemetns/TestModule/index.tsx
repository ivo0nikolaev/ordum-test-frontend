import React from "react";
import { useState } from "react";
import ReactModal from "react-modal";

const TestModal: React.FC<{
  children: string | JSX.Element | JSX.Element[];
  // openModal: () => void | boolean;
}> = (props) => {
  const [modalState, setModalState] = useState(false);

  const closeHandler = () => {
    setModalState(false)
  }

  const openHandler = () => {
    setModalState(true)
  }

  const setModal = () => {
    setModalState(!modalState);
  }

  return (
    <ReactModal
      isOpen={modalState}
      style={{
        overlay: {
          position: "fixed",
          backgroundColor: "rgba(255, 255, 255, 0.80)",
        },
        content: {
          position: "absolute",
          width: "420px",
          height: "420px",
          top: "6vh",
          left: "75vw",
          right: "40px",
          bottom: "40px",
          border: "1px solid #ccc",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "12px",
          outline: "none",
          padding: "20px",
        },
      }}
    >
      <div className="">
        <button className="ml-80 border-2 p-2" onClick={closeHandler}>
          Close
        </button>
        <div className="mt-2">{props.children}</div>
      </div>
    </ReactModal>
  );
};

export default TestModal;
