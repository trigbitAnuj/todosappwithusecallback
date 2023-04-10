import { Draggable } from "react-beautiful-dnd";
import { MdDone } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";


Draggable
export default function Completed ({index,todo, onChangeCompletedTodos,onDeleteCompletedTodos}){
  
    return (
      <Draggable draggableId={todo.id.toString()} index={index}>
        {(provided) => (
          <div
            className="flex rounded-md  justify-between  mt-3  p-[15px] bg-gray-400 hover:scale-[1.01]"
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            {todo.isDone ? (
              <s className="text-2xl font-light">{todo.text}</s>
            ) : (
              <span className="text-2xl">{todo.text}</span>
            )}
  
            <section className="flex ">
              <button
                className="cursor-pointer ml-3 text-xl"
                onClick={() =>onDeleteCompletedTodos(todo.id)
                  
                }
              >
                <AiFillDelete />
              </button>
              <button
                className="cursor-pointer ml-3 text-xl"
                onClick={() =>onChangeCompletedTodos(todo.id)
                 
                }
              >
                <MdDone />
              </button>
            </section>
          </div>
        )}
      </Draggable>
    );
  
  }