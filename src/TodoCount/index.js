import React from 'react';
import './TodoCount.css';

function TodoCount({ total, completed}) {
  return (
    <h1 className='TodoCount'>
        your tasks <span>{completed}</span> to <span>{total}</span> 
    </h1>
  );
}

export {TodoCount};