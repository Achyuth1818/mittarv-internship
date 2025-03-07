import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import KanbanBoard from "./components/KanbanBoard";

const App = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100">
        <KanbanBoard />
      </div>
    </Provider>
  );
};

export default App;
