import { useDispatch } from "react-redux";
import { setSearchQuery } from "../redux/tasksSlice";
import { FiSearch } from "react-icons/fi"; // Importing the search icon

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white z-10 shadow-sm p-3 flex items-center sm:mx-20  rounded-md  md:mx-[30%] ">
      {" "}
      {/* Adjusted styles */}
      <input
        type="text"
        placeholder="Search tasks..."
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        className="w-full p-2 border-b-2 border-gray-200 focus:outline-none focus:border-blue-500 text-center"
      />
      <FiSearch className="text-gray-400 mr-2" size={20} />
    </div>
  );
};

export default SearchBar;
