import { useCallback, useState } from "react";
import TodosList from "../components/TodosList";
import AddTodo from "../components/AddTodo";

const initialTodos=[]
  let nextId=4
  
  function TodoApp() {
    // const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(initialTodos);
    console.log("parent Component")
  
  // const increment=useCallback(()=>{
  //   console.log("count button Clicked")
  //   setCount(count+1)
  // },[count])


  
  const onAddTodo=useCallback((text)=>{
    console.log("add todo button clicked")
    setTodos((todos)=>[...todos,{id:nextId++,text:text,isDone:false}])
  },[])


const onDeleteTodo=(id)=>{
  setTodos((todos)=>todos.filter((todo)=>todo.id!==id)); 
}

const onChangeTodo=(id)=>{
   setTodos(todos.map((todo)=>todo.id===id ? {...todo,isDone:!todo.isDone}:todo))
}




    return (
      <section className="m-4 p-2">
        <h1 className="text-center text-4xl font-bold my-8">Todos</h1>
       {/* <Count count={count} increment={increment}/> */}
          <AddTodo onAddTodo={onAddTodo}/>
        <TodosList todos={todos} onDeleteTodo={onDeleteTodo} onChangeTodo={onChangeTodo}/>
  
      </section>
      
    );
  }
  
  export default TodoApp;