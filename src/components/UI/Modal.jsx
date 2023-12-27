import React from "react";
import { createPortal } from "react-dom";
import "./Modal.css";
function Modal({ children }) {
  return createPortal(
    <>
      <div className="modalBackDrop"></div>
      <div className="expanded-overlay">{children}</div>
    </>,
    document.getElementById("modal")
  );
}

export default Modal;
