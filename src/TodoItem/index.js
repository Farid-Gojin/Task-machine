import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { IoCloseCircle } from "react-icons/io5";
import './TodoItem.css'

function TodoItem(props) {
    return(
      <li className="Todoitem">
       <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`} onClick={props.onComplete}><BsFillPatchCheckFill /></span>
       <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
       <span className="Icon Icon-delete" onClick={props.onDelete}><IoCloseCircle /></span> 
      </li>
    );
  } 

export {TodoItem};