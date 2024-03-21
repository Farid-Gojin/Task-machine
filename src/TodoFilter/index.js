import React from "react";
import './TodoFilter.css';
import { TodoContext } from "../TodoContext";

function TodoFilter() {
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);

  return (
    <input 
      placeholder="search"
      className="Todofilter"
      value={searchValue}
      onChange={(event) =>{
        setSearchValue(event.target.value);
      }}
    />
  );
}

export {TodoFilter};
