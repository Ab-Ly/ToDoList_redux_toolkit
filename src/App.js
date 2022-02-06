import React from "react";
import AddToDo from "./components/AddTodo";

import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <h1>TO DO LIST </h1>
      <AddToDo />
      <TodoList />
    </div>
  );
}

export default App;
