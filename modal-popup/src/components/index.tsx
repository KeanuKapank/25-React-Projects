import React, { useState } from "react";
import { Modal } from "./modal";
import "./style.css";

function Header() {
  return <h1>Header</h1>;
}

function Footer() {
  return <h1>Footer Content</h1>;
}

function Body() {
  return <h1>Body Content</h1>;
}

const ModalTest = () => {
  const [showModal, setShowModal] = useState(false);

  function handleToggle() {
    setShowModal(showModal ? false : true);
  }
  return (
    <>
      <button onClick={handleToggle} className="btn">
        Open Modal Popup
      </button>
      {showModal && (
        <Modal
          id={1}
          header={<Header />}
          body={<Body />}
          footer={<Footer />}
          onClose={handleToggle}
        ></Modal>
      )}
    </>
  );
};

export default ModalTest;
