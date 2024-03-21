import React from "react";
import {TodoContext} from '../TodoContext'
import './TodoForm.css'


function TodoForm() {
    
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false)
    };

    const onCancel = () => {
        setOpenModal(false)
    };

    const onchange = (event) => {
        setNewTodoValue(event.target.value);
    };

    return(
        <form onSubmit={onSubmit}>
            <label>Create new Task</label>
            <textarea
            placeholder="aprender una nueva mecanica"
            value={newTodoValue}
            onChange={onchange}
            />
            <div className="TodoForm-buttonContainer">
                <button type="button" className="TodoForm-button TodoForm-button--delete" onClick={onCancel}>delete</button>
                <button type="submit" className="TodoForm-button TodoForm-button--add">add</button>
            </div>
        </form>
    )
}

export {TodoForm}