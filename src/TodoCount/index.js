import React from 'react';
import './TodoCount.css';
import { TodoContext } from '../TodoContext';

function TodoCount() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext)
  return (
    <h1 className='TodoCount'>
        your tasks <span>{completedTodos}</span> to <span>{totalTodos}</span> 
    </h1>
  );
}

export {TodoCount};