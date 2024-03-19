import React from "react"
import './estilos.css'
function TodoList({children}) {
  return (
    <ul>
        {children}
    </ul>
  )
}

export {TodoList};