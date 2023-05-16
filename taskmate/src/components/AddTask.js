import React, { useState, useRef } from "react";
import "./AddTask.css";

export const AddTask = ({ tasks, setTasks }) => {
  // const [taskValue, setTaskValue] = useState("");
  const taskRef = useRef("");
  const [progress, setProgress] = useState(false);

  const handleReset = () => {
    taskRef.current.value = "";
    // setTaskValue("");
    setProgress(false);
  };

  const handleChange = (event) => {
    console.log(taskRef.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 10000),
      // name: taskValue,
      name: taskRef.current.value,
      completed: Boolean(progress),
    };
    setTasks([...tasks, task]);
    handleReset();
  };

  return (
    <section className="addtask">
      <form onSubmit={handleSubmit} action="">
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Task Name"
          autoComplete="off"
          ref={taskRef}
          // onChange={(e) => {
          //   setTaskValue(e.target.value);
          // }}

          onChange={handleChange()}
        />
        <select
          onChange={(event) => setProgress(event.target.value)}
          name=""
          id=""
          value={progress}
        >
          <option value={false}>Pending</option>
          <option value={true}>Complete</option>
        </select>
        <button onClick={handleReset} className="reset ">
          reset
        </button>
        <button type="submit">Add Task</button>
      </form>
      {/* <p>{taskValue}</p> */}
    </section>
  );
};
