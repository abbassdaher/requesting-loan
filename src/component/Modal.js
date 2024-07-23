import React from "react";

function Modal(props) {
  return (
    <div className="modalStyle  text-center text-capitalize " style={{background:props.color}}>
      {props.text}
    </div>
  );
}

export default Modal;
