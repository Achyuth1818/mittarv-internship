import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development
});
