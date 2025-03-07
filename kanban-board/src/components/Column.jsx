import { useDrop } from "react-dnd";
import TaskCard from "./TaskCard";
import { useSelector, useDispatch } from "react-redux";
import { moveTask } from "../redux/tasksSlice";

const Column = ({ status, title }) => {
  const dispatch = useDispatch();
  const { tasks, searchQuery } = useSelector((state) => state.tasks);

  // Filter tasks based on the current column status and search query
  const filteredTasks = tasks
    .filter((task) => task.status === status)
    .filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  // Set up the drop target for drag-and-drop functionality
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "TASK", // Specify the type of draggable item
    drop: (item) => {
      // Dispatch action to move the task to the new status
      dispatch(moveTask({ taskId: item.id, newStatus: status }));
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(), // Check if the item is currently being dragged over this column
      canDrop: monitor.canDrop(), // Check if the item can be dropped here
    }),
  }));

  return (
    <div
      ref={drop}
      className={`w-full md:w-72 bg-gray-100 rounded-lg shadow-md p-4 transition-colors ${
        canDrop && isOver ? "bg-blue-200" : "" // Change background color if item can be dropped
      }`}
    >
      <h2 className="text-lg font-bold text-gray-800 mb-4">{title}</h2>
      <div className="space-y-2 min-h-[200px]">
        {/* Render filtered tasks as TaskCard components */}
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Column;
