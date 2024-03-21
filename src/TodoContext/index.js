import React from "react";
import { useLocalStorage } from "../App/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}) {

    const {item: todos, saveItem: saveTodos, loading, error,} = useLocalStorage('TODOSV1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const completedTodos = todos.filter((todo) => !!todo.completed).length;
    const totalTodos = todos.length;
    
    const noTildes = (text) => {
      return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    };
  
    const completeTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex((todo) => todo.text === text);
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed; 
      saveTodos(newTodos);
    };
    
    const DeleteTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex((todo) => todo.text === text);
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
    };
  
    const searchedTodos = todos.filter((todo) => {
      const todoTextLC = noTildes(todo.text.toLowerCase());
      const searchTextLC = noTildes(searchValue.toLowerCase());
  
      return todoTextLC.includes(searchTextLC);
    });
    return (
        <TodoContext.Provider value={{loading, error, completedTodos, totalTodos, searchValue, setSearchValue, searchedTodos, completeTodo, DeleteTodo}}>
           
            {children}

        </TodoContext.Provider>
    );
}



export {TodoContext, TodoProvider} ;
