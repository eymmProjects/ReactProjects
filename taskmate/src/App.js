import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <Header />
      <TaskList title="Eymm" />
    </div>
  );
}

export default App;
