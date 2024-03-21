import React, { useState } from "react";
import './TodoFilter.css';
import { TodoContext } from "../TodoContext";

const placeholders = [
  "cocinar en casa",
  "limpiar la casa",
  "hacer ejercicio",
  "leer un libro",
  "aprender algo nuevo"
];

function TodoFilter() {
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);

  const [placeholderIndex] = useState(Math.floor(Math.random() * placeholders.length));
  const randomPlaceholder = placeholders[placeholderIndex];

  return (
    <input 
      placeholder={randomPlaceholder}
      className="Todofilter"
      value={searchValue}
      onChange={(event) =>{
        setSearchValue(event.target.value);
      }}
    />
  );
}

export {TodoFilter};
