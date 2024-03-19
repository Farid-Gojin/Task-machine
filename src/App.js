import { TodoCount } from './TodoCount';
import { TodoFilter } from './TodoFilter'; 
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';
import './App.css';

const defaultTodos = [
  { text: 'cortar cebolla', completed: true },
  { text: 'aprender curso', completed: false },
  { text: 'llegar a ascendente', completed: false },
  { text: 'no se que poner ', completed: false },
  { text: 'aea', completed: true},
];

function App() {

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const noTildes = (text) => {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };
  const DeleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    console.log("New todos:", newTodos); // Verificar que newTodos tiene la tarea eliminada
    setTodos(newTodos);
};


  const searchedTodos = todos.filter(
    (todo) => {
      const todoTextLC = noTildes(todo.text.toLowerCase());
      const searchTextLC = noTildes(searchValue.toLowerCase());

      return todoTextLC.includes(searchTextLC);
    }
  );

  return (
    <React.Fragment>
      <TodoCount completed={completedTodos} total={totalTodos} />
      <TodoFilter
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => DeleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
