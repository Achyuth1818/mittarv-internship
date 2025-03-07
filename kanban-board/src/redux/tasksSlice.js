import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

// Load tasks from localStorage
const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  searchQuery: "",
};

// Normalize tasks
const normalizedTasks = initialState.tasks.map(task => ({
  id: task.id,
  title: task.title || '',
  description: task.description || '',
  status: task.status || 'todo',
}));

initialState.tasks = normalizedTasks;

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: uuidv4(),
        ...action.payload,
        status: "todo",
      };
      state.tasks.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    moveTask: (state, action) => {
      const { taskId, newStatus } = action.payload;
      const task = state.tasks.find((t) => t.id === taskId);
      if (task) {
        task.status = newStatus;
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { addTask, moveTask, setSearchQuery } = tasksSlice.actions;
export default tasksSlice.reducer;
