import React, { useState } from "react";
import "../App.css";
import CreateTodo from "./CreateTodo";
import TodoBody from "./TodoBody";

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({});

  return (
    <div className="container mt-5">
      <CreateTodo form={form} setForm={setForm} setTasks={setTasks} />

      <TodoBody tasks={tasks} setTasks={setTasks} setForm={setForm} />
    </div>
  );
}
