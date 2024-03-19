import React from "react";
import './estilos.css';

const placeholders = [
  "cocinar en casa",
  "limpiar la casa",
  "hacer ejercicio",
  "leer un libro",
  "aprender algo nuevo"
];

function TodoFilter({
  searchValue,
  setSearchValue
}) {
  
  const randomIndex = Math.floor(Math.random() * placeholders.length);
  const randomPlaceholder = placeholders[randomIndex];

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
