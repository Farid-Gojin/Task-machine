import React from "react"
import './estilos.css'
function CreateTodoButton() {
  return (
    <button 
    className="Createtodobutton"
     onClick={
      (event) => { 
        console.log('click'); 
        console.log(event);
        console.log(event.target);
         }
        }
      >+</button>
  );
}

export {CreateTodoButton};