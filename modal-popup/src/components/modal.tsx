import React from "react";
import "./style.css";

interface ModalProps {
  id: number;
  header: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
  onClose: () => void;
}

export const Modal = ({ header, footer, body, onClose }: ModalProps) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="header">
          <div className="close-modal" onClick={onClose}>
            &times;
          </div>
          <h2>{header ? header : "Default Footer"}</h2>
        </div>
        <div className="body">
          <h2>{body ? body : <p>This is our default body</p>}</h2>
        </div>
        <div className="footer">
          <h2>{footer ? footer : <p>This is our default footer</p>}</h2>
        </div>
      </div>
    </div>
  );
};
