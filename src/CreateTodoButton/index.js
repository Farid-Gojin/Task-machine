import React from "react";
import './CreateTodobutton.css';

function CreateTodoButton({ setOpenModal }) {
  const handleClick = () => {
    setOpenModal((state) => !state);
  };

  return (
    <button
      className="Createtodobutton"
      onClick={handleClick}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
