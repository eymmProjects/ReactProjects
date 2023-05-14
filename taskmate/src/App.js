import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

function App() {
  const info = "Random";

  return (
    <div className="App">
      <Header />
      <TaskList info={info} title="Eymm" />
    </div>
  );
}

export default App;
