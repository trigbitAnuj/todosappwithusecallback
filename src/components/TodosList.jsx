import React, { memo } from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";



function TodosList({ todos, onDeleteTodo, onChangeTodo }) {
  return (
    <section className=" flex  w-full mt-4 justify-between gap-2   ">

      <section className=" flex flex-col  bg-teal-300 p-[10px] w-[50%]  rounded-lg gap-2  ">
        <h1 className="text-3xl text-white font-serif text-center">Active Todos</h1>
        <ul >
          {todos.map((todo) => (
            <li key={todo.id}>
              <SingleTodo
                todo={todo}
                onChangeTodo={onChangeTodo}
                onDeleteTodo={onDeleteTodo}
              />
            </li>
          ))}
        </ul>
      </section>
      
      <section className="flex flex-col bg-red-400 w-[50%]    rounded-lg p-[10px]  gap-2">
        <h1 className="text-3xl font-serif text-white text-center">Completed Todos</h1>
        <CompletedTodos todos={todos} onDeleteTodo={onDeleteTodo}/>
      </section>
     
    </section>
  );
}

export default memo(TodosList);

function SingleTodo({ todo, onDeleteTodo, onChangeTodo }) {
  return (
    <div className="flex rounded-md  justify-between  mt-3  p-[15px] bg-gray-400 hover:scale-[1.01]
     ">
      {todo.isDone ? <s className="text-2xl font-light">{todo.text}</s> : <span className="text-2xl">{todo.text}</span>}

      <section className="flex ">
        <button
          className="cursor-pointer ml-3 text-xl"
          onClick={() => {
            onDeleteTodo(todo.id);
          }}
        >
          <AiFillDelete />
        </button>
        <button
          className="cursor-pointer ml-3 text-xl"
          onClick={() => {
            onChangeTodo(todo.id);
          }}
        >
          <MdDone />
        </button>
      </section>
    </div>
  );
}


function CompletedTodos({todos,onDeleteTodo}) {
  let completedTodos = todos.filter((todo)=>todo.isDone)

  console.log(completedTodos)
return (
  <div>
    
    <ul>
    {completedTodos?completedTodos.map((completedTodo)=>(
     <li>
      <div className="flex rounded-md items-center justify-between  mt-3  p-[15px] bg-blue-300 hover:scale-[1.01]
     ">
      <p className="text-2xl "  >{completedTodo.text}</p>

      <section>
      <button
          className="cursor-pointer ml-3 text-xl"
          onClick={() => {
            onDeleteTodo(completedTodo.id);
          }}
        >
          <AiFillDelete />
        </button>
      </section>

     </div>
     </li>
    
     )):null} 
      </ul>
    
    
  </div>
)
}