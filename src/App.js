
import './App.css';
import { useCallback, useState } from 'react';
import Todos from './Todos';
import Count from './Count';

const initialTodos=[
  {id:1,text:"new todo"},
  {id:2,text:"new todo"},
  {id:3,text:"new todo"}
]
let nextId=4

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(initialTodos);
  console.log("parent Component")

const increment=useCallback(()=>{
  console.log("count button Clicked")
  setCount(count+1)
},[count])

const addTodo=useCallback(()=>{
  console.log("add todo button clicked")
  setTodos((todos)=>[...todos,{id:nextId++,text:"nextTodo"}])
},[todos])
  return (
    <div>
     <Count count={count} increment={increment}/>
      <Todos todos={todos} addTodo={addTodo}/>

    </div>
    
  );
}

export default App;
