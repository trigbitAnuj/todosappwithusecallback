import React, { useState } from 'react'

function AddTodo({dispatch}) {
     
   
    const [text ,setText]=useState("")
  return (
    <section className='m-4  w-full flex justify-center'>
         <input type="text"  value={text} onChange={(e)=>setText(e.target.value)} placeholder='add todo' className='p-3 text-xl border-black border-2 rounded-md w-[40%] ' />
         <button className=' cursor-pointer p-2 mx-2 border outline-none  bg-blue-600 rounded-md text-xl hover:bg-blue-700 ' onClick={()=>{dispatch({
           type:"add",
           payload:{
            text:text,
            id:Date.now()
           }
         })

         setText("")}}>AddTodo</button>
    
    </section>
  )
}

export default AddTodo 

