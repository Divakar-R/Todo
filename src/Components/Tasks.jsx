import React from "react";

export default function Tasks({ index, task, setTasks, setForm }) {
  const handleDelete = (e) => {
    setTasks((prev) => {
      return prev.filter((p, i) => (i === index ? false : true));
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTasks((prev) => {
      prev[index][name] = value;
      return [...prev];
    });
  };

  const handleEdit = (e) => {
    setForm({
      ...task,
      index,
    });
  };
  console.log("task", task);
  return (
    <div className="col-md-3 bg-success-lightgreen p-4 m-3 mt-3">
      <div className="p-2">Name: {task.name}</div>
      <div className="p-2">Description : {task.description}</div>
      <div className="p-2 d-flex">
        <div className="col-md-3 align-content-center">Status: </div>
        <div className="col-md-9">
          <select
            value={task.status}
            name="status"
            className="form-select"
            aria-label="filter status"
            onChange={handleChange}
          >
            <option value="completed">Completed</option>
            <option value="not_completed">Not Completed</option>
          </select>
        </div>
      </div>

      <div className="text-end mt-3">
        <button
          onClick={(e) => handleEdit(e)}
          type="button"
          className="btn btn-success mx-2"
        >
          Edit
        </button>
        <button
          onClick={(e) => handleDelete(e)}
          type="button"
          className="btn btn-danger mx-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
