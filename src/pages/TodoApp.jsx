import { useCallback, useEffect, useReducer, useState } from "react";
import TodosList from "../components/TodosList";
import AddTodo from "../components/AddTodo";
import { DragDropContext } from "react-beautiful-dnd";
import { reducer } from "../components/reducer";
import {
  getCompletedTodosFromLocalStorage,
  getTodosFromLocalStorage,
} from "../utils";

const TodoApp = () => {
  // const [count, setCount] = useState(0);
  // const [todos, setTodos] = useState(initialTodos);
  const [completedTodos, setcompletedTodos] = useState(
    getCompletedTodosFromLocalStorage()
  );

  const [todos, dispatch] = useReducer(reducer, getTodosFromLocalStorage());

  const DragEnd = (result) => {
    const { source, destination } = result;

    let add;
    let active = todos;
    let complete = completedTodos;
    console.log(complete, "first");

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (source.droppableId === "todos-list") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }
    if (destination.droppableId === "todos-list") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setcompletedTodos([...complete]);
  };

  useEffect(() => {
    localStorage.setItem("activeTodos", JSON.stringify(todos));
    localStorage.setItem("completedTodos", JSON.stringify(completedTodos));
  }, [todos, completedTodos]);

  return (
    <DragDropContext onDragEnd={DragEnd}>
      <section className="m-4 p-2">
        <h1 className="text-center text-4xl font-bold my-8">Todos</h1>
        {/* <Count count={count} increment={increment}/> */}
        <AddTodo dispatch={dispatch} />
        <TodosList
          todos={todos}
          dispatch={dispatch}
          completedTodos={completedTodos}
          setCompletedTodos={setcompletedTodos}
        />
      </section>
    </DragDropContext>
  );
};

export default TodoApp;
