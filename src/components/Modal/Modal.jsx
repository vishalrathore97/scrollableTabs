import ReactDOM from "react-dom";
import React from "react";
import "./Modal.css";

function Modal({ onClose, onDelete, id }) {
  return ReactDOM.createPortal(
    <div className="modal" onClick={onClose}>
      <div className="modal__content">
        <h1 className="modal__title">WARNING!</h1>
        <p className="modal__body">Are you sure you want to close?</p>
        <div className="modal__btn">
          <button onClick={() => onDelete(id)} className="modal__btn--danger">
            Close
          </button>
          <button onClick={onClose} className="modal__btn--primary">
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
