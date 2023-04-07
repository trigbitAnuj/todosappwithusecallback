import { useCallback, useState } from "react";
import TodosList from "../components/TodosList";
import AddTodo from "../components/AddTodo";
import { DragDropContext } from "react-beautiful-dnd";

let nextId=1;
const initialTodos=[]
  
  function TodoApp() {
    // const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(initialTodos);
    const [completedTodos,setcompletedTodos]=useState([])
    console.log("parent Component")
    console.log(todos);
    console.log(completedTodos)
  
  // const increment=useCallback(()=>{
  //   console.log("count button Clicked")
  //   setCount(count+1)
  // },[count])


  
  const onAddTodo=(text)=>{
    console.log("add todo button clicked")
    setTodos((todos)=>[...todos,{id:nextId++,text:text,isDone:false}])
  }


const onDeleteTodo=(id)=>{
  console.log("delete function run")
  setTodos((todos)=>todos.filter((todo)=>todo.id!==id)); 
}

const onChangeTodo=(id)=>{
  console.log("onchange run")
   setTodos(todos.map((todo)=>todo.id===id ? {...todo,isDone:!todo.isDone}:todo))
}

const onDragEnd=(result)=>{
const {source,destination}=result;

  let add;
  let active=todos;
  let complete=completedTodos;
  

  


   if(!destination)
    return;
   
   if(source.droppableId === destination.droppableId && source.index===destination.index)
    return;
   
   
   if(source.droppableId==="todos-list"){
     add =active[source.index];
       active.splice(source.index,1)
     
   }
   else{
    add=complete[source.index]
    complete.splice(source.index,1)
   
   }
   if(destination.droppableId==="todos-list"){
      active.splice(destination.index,0,add)
      
   }
   else{
    complete.splice(destination.index,0,add)
 
   }
   
   setTodos(active)
   setcompletedTodos(complete)
   



}




    return (
      <DragDropContext onDragEnd={onDragEnd}>
    <section className="m-4 p-2">
        <h1 className="text-center text-4xl font-bold my-8">Todos</h1>
       {/* <Count count={count} increment={increment}/> */}
          <AddTodo onAddTodo={onAddTodo}/>
        <TodosList todos={todos} onDeleteTodo={onDeleteTodo} onChangeTodo={onChangeTodo} completedTodos={completedTodos}/>
  
      </section>
      </DragDropContext>
      
      
    );
  }
  
  export default TodoApp;