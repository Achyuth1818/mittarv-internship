import { useDrag } from "react-dnd";

const TaskCard = ({ task }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TASK",
    item: { id: task.id, status: task.status },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`bg-white p-3 rounded-md shadow-sm transition-transform transform hover:scale-105 ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <h3 className="font-semibold text-gray-800">{task.title}</h3>
      <p className="text-sm text-gray-600 truncate">{task.description}</p>
    </div>
  );
};

export default TaskCard;
