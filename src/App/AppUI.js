import React from "react";
import { TodoCount } from '../TodoCount';
import { TodoFilter } from '../TodoFilter'; 
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI ({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    DeleteTodo
}) {
    return (
        <>
          <TodoCount completed={completedTodos} total={totalTodos} />
          <TodoFilter searchValue={searchValue} setSearchValue={setSearchValue} />
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
        </>
      );
}

export {AppUI} ;