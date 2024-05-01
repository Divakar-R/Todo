import React from "react";

export default function CreateTodo({ setTasks, form, setForm }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prev) => {
      if (form?.status) {
        let result = [...prev];
        result[form.index] = form;
        return result;
      } else {
        return [...prev, { ...form, status: "not_completed" }];
      }
    });
    setForm({});
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="row text-center">
          <h2 className="text-success">My Todo</h2>
        </div>
        <div className="row mt-4 mx-auto align-middle">
          <div className="col-md-5">
            <div className="mb-3 ">
              <input
                type="text"
                className="form-control border border-success"
                id="name"
                name="name"
                placeholder="Todo Name"
                value={form.name || ""}
                onChange={(e) => handleInput(e)}
              />
            </div>
          </div>
          <div className="col-md-5">
            <div className="mb-3">
              <input
                type="text"
                className="form-control border border-success"
                id="description"
                name="description"
                value={form.description || ""}
                placeholder="Todo Description"
                onChange={(e) => handleInput(e)}
              />
            </div>
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-success">
              {form.status ? "Update Task" : "Add Task"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
