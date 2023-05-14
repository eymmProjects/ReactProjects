import "./TaskCard.css";
import React from "react";

export const TaskCard = ({ task, handleDelete }) => {
  return (
    <div className="taskcard">
      <li
        key={task.id}
        className={`taskcard ${task.completed ? "completed" : "incomplete"}`}
      >
        <span>
          {task.id} - {task.name}
        </span>
        <button onClick={() => handleDelete(task.id)} className="delete">
          Delete
        </button>
      </li>
    </div>
  );
};
