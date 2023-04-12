import React, { memo } from "react";
import { Droppable } from "react-beautiful-dnd";

import SingleTodo from "./SingleTodo";
import Completed from "./Completed";

const TodosList = ({ todos, dispatch, completedTodos, setCompletedTodos }) => {
  
  const changeCompletedTodos = (id) => {
    setCompletedTodos(
      completedTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const deleteCompletedTodos = (id) => {
    setCompletedTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <section className=" flex  w-full mt-4 justify-between gap-2">
      <Droppable droppableId="todos-list">
        {(provided) => (
          <section
            className="flex flex-col  bg-teal-300 p-[10px] w-[50%]  rounded-lg gap-2 "
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h1 className="text-3xl text-white font-serif text-center">
              Active Todos
            </h1>

            {todos.map((todo, index) => (
              <SingleTodo
                key={todo.id}
                index={index}
                todo={todo}
                dispatch={dispatch}
              />
            ))}

            {provided.placeholder}
          </section>
        )}
      </Droppable>

      <Droppable droppableId="Todos-remove">
        {(provided) => (
          <section
            className="flex flex-col bg-red-400 w-[50%]    rounded-lg p-[10px]  gap-2"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h1 className="text-3xl font-serif text-white text-center">
              Completed Todos
            </h1>

            {completedTodos.map((todo, index) => (
              <Completed
                key={todo.id}
                index={index}
                todo={todo}
                changeCompletedTodos={changeCompletedTodos}
                deleteCompletedTodos={deleteCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </section>
        )}
      </Droppable>
    </section>
  );
};

export default memo(TodosList);
