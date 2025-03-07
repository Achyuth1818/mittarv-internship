import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Column from "./Column";
import SearchBar from "./SearchBar";
import AddTaskModal from "./AddTaskModal";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
const KanbanBoard = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header /> {/* Render the Header at the top of the board */}
        <div className="flex flex-col p-4 pt-20 px-10 flex-grow">
          <SearchBar /> {/* Render the SearchBar for task searching */}
          {/* Container for the task columns */}
          <div className="flex overflow-x-auto mt-6 space-x-4 gap-4 mx-[5%]">
            {/* Individual task columns */}
            <Column status="todo" title="To Do" />
            <Column status="inprogress" title="In Progress" />
            <Column status="peerreview" title="Peer Review" />
            <Column status="done" title="Done" />
          </div>
          <AddTaskModal /> {/* Modal for adding new tasks */}
        </div>
        <Footer /> {/* Render the Footer at the bottom of the board */}
      </div>
    </DndProvider>
  );
};

export default KanbanBoard;
