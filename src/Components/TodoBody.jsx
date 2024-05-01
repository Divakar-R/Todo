import React, { useState } from "react";
import Tasks from "./Tasks";

export default function TodoBody({ tasks, setTasks, setForm }) {
  const [filter, setFilter] = useState("");
  return (
    <div>
      <div className="row mt-5">
        <div className="col-md-6">
          <h5>My Todos </h5>
        </div>
        <div className="col-md-6 text-end d-flex ">
          <div className="col-md-10 px-2 align-content-center">
            {" "}
            Status Filter :
          </div>
          <div className="col-md-4">
            {" "}
            <select
              value={filter || ""}
              onChange={(e) => {
                setFilter(e.target.value);
              }}
              className="form-select"
              aria-label="filter status"
            >
              <option value="">All</option>
              <option value="completed">Completed</option>
              <option value="not_completed">Not Completed</option>
            </select>
          </div>{" "}
        </div>
      </div>

      <div>
        <div className="row gap-3">
          {tasks?.length > 0
            ? tasks
                ?.filter((t) => (!filter ? true : filter === t?.status))
                ?.map((t, i) => {
                  return (
                    <Tasks
                      key={i}
                      index={i}
                      task={t}
                      setTasks={setTasks}
                      setForm={setForm}
                    />
                  );
                })
            : "No Task Available"}
        </div>
      </div>
    </div>
  );
}
