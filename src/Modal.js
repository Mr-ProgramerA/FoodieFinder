import React from "react";
import ReactDOM from "react-dom";

const MODEAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  backgroundColor: "rgb(255, 229, 114)",
  transform: "translate(-50%,-50%)",
  zIndex: 100,
  height: "75%",
  width: "87%",
  borderRadius: "9px",
  "overflowY": "auto",
  "overflowX": "hidden",

};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  botton: 0,
  width:"100vw",
  height:"100vh",
  backgroundColor: "rgba(0,0,0,.5)",
  // backgroundColor: "black",
  zIndex: 100,
};


export default function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODEAL_STYLES}>
        <button
          className="btn bg-danger fs-4"
          style={{ marginLeft: "94%", marginTop: "-10px", zIndex: "200" }}
          onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </>,
    document.getElementById("cart-root")
  );
}

// export default Model;
