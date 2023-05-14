import React from "react";
import { useState } from "react";
import { TaskCard } from "./TaskCard";
import { BoxCard } from "./BoxCard";

export const TaskList = ({ info }) => {
  const [tasks, setTasks] = useState([
    { id: 5271, name: "Record React Lectures", completed: true },
    { id: 7825, name: "Edit React Lectures", completed: false },
    { id: 8391, name: "Watch Lectures", completed: false },
  ]);

  const [show, setShow] = useState(true);

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <>
      <h1>Task List </h1>
      <ul>
        <button onClick={() => setShow(!show)} className="trigger">
          Toggle
        </button>

        {show && tasks.map((task) => <TaskCard info={info} task={task} />)}
      </ul>

      <BoxCard result="success">
        <p className="title">Lorem ipsum dolor sit amet.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          vel!
        </p>
      </BoxCard>

      <BoxCard result="warning">
        <p className="title">Lorem ipsum dolor sit.</p>
        <p className="description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, eum
          odit! Labore eaque fuga repellat adipisci molestias quasi animi fugiat
          necessitatibus sunt vel, optio rem non quidem! Blanditiis cupiditate
          iusto omnis reprehenderit assumenda maxime, nam perferendis impedit
          libero odit eius eum aut cum ad, excepturi officiis repudiandae.
          Molestiae, eum cumque?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          nulla?
        </p>
      </BoxCard>
    </>
  );
};
