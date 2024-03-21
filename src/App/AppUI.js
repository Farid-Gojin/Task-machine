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


function AppUI () {
  const{
    loading, 
    error, 
    searchedTodos, 
    completeTodo, 
    DeleteTodo,
    openModal,
  } = React.useContext(TodoContext);

    return (
        <>
          <TodoCount/>
          <TodoFilter/>
          <TodoList>
                {loading && <Todosloading/>}
                {error && <TodosError/>}
                {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}
    
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
          <CreateTodoButton/>
          
          {openModal && (
            <Modal>
            agregar todos
            </Modal>
          )}
        </>
      );
}

export {AppUI} ;