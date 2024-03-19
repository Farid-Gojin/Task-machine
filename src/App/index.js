import React from 'react';
import { AppUI } from './AppUI';
import './App.css';
import {useLocalStorage} from './useLocalStorage'

function App() { 
  const [todos, saveTodos] = useLocalStorage('TODOSV1', []);
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
    <AppUI
     completedTodos={completedTodos}
     totalTodos={ totalTodos}
     searchValue={searchValue}
     setSearchValue={setSearchValue}
     searchedTodos={searchedTodos}
     completeTodo={completeTodo}
     DeleteTodo={DeleteTodo}
   />
  )
}

export default App;

// const defaultTodos = [
//   { text: 'cortar cebolla', completed: true },
//   { text: 'aprender curso', completed: false },
//   { text: 'llegar a ascendente', completed: false },
//   { text: 'no se que poner ', completed: false },
//   { text: 'aea', completed: true},
// ];

// localStorage.setItem('TODOSV1',JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOSV1')

  // console.log('log 1');

  // // se ejecuta al final 
  // // React.useEffect(() =>{
  // //   console.log('looooogbait 2')
  // // });
 
  // // se ejecuta solo una vez 
  // // React.useEffect(() =>{
  // //   console.log('looooogbait 2')
  // // }, []);

  // //se ejecuta 1 vez y cuando se usa el estado totaltodos
  // // React.useEffect(() =>{
  // //   console.log('looooogbait 2')
  // // }, [totalTodos]);

  // console.log('log 3');