import { useState } from "react";
import ReactModal from "react-modal";

const TestModal = () => {
  const [modalState, setModalState] = useState(true);

  function closeModal() {
    setModalState(false);
  }

  return (
    <ReactModal
      isOpen={modalState}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.80)",
        },
        content: {
          position: "absolute",
          top: "40px",
          left: "40px",
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
      <p>123</p>
      <button className=" border-2 p-2" onClick={closeModal}>
        Close
      </button>
    </ReactModal>
  );
};

export default TestModal;
