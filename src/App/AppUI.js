import React from "react";
import { TodoCount } from '../TodoCount';
import { TodoFilter } from '../TodoFilter'; 
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { Todosloading } from '../Todosloading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from '../TodoForm';

function AppUI() {
  const {
    loading, 
    error, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoCount/>
      <TodoFilter/>
      <TodoList>
        {loading && !openModal && <Todosloading/>}
        {error && <TodosError/>}
        {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton setOpenModal={setOpenModal}/>
      
      {openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}
    </>
  );
}

export { AppUI };
