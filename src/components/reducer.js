export function reducer(todos,action){
    switch(action.type){
       case "add" :
           const {id,text}=action
           return [...todos,{id:id,text:text,isDone:false}];
  
  
      case "remove":
        const {todoId}=action;
        return (todos.filter((todo)=>todo.id!==todoId));
  
        case "change":
          const {changeId}=action;
          return (todos.map((todo)=>todo.id===changeId?{...todo,isDone:!todo.isDone}:todo))
  
  
    }
   }