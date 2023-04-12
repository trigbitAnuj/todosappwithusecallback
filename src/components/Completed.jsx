import { Draggable } from "react-beautiful-dnd";
import { MdDone } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

const Completed = ({ index, todo, deleteCompletedTodos }) => {
  console.log("completed component rendered");

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <div
          className="flex rounded-md  justify-between  mt-3  p-[15px] bg-green-400 hover:scale-[1.01]"
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
              onClick={() => deleteCompletedTodos(todo.id)}
            >
              <AiFillDelete />
            </button>
          </section>
        </div>
      )}
    </Draggable>
  );
};
export default Completed;
