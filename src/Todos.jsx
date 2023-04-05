import React, { memo, useEffect } from 'react'

function Todos({todos,addTodo}) {
    useEffect(()=>{
        console.log("todos component render")
    })
  return (
    <div>
        {todos.map((todo)=>(
            <li key={todo.id}>{todo.text}</li>
        ))}
        <button onClick={addTodo}>AddTodo</button>
    </div>
  )
}

export default memo(Todos)