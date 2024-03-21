import React from "react";
import './TodoForm.css'

function TodoForm() {
    return(
        <form>
            <label>Create new Task</label>
            <textarea
            placeholder="aprender una nueva mecanica"/>
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button--delete">delete</button>
                <button className="TodoForm-button TodoForm-button--add">add</button>
            </div>
        </form>
    )
}

export {TodoForm}