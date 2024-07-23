import React from "react";

function FormRegestration() {
  return (
    <div>
      <form
        className="formStyle"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            name:
          </label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            phone Number:
          </label>
          <input
            type="number"
            className="form-control"
            id="phoneNumber"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            age:
          </label>
          <input type="number" className="form-control" id="age" />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            are you an employee?
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="disabledSelect" className="form-label">
            salary
          </label>
          <select id="" className="form-select">
            <option>500$</option>
            <option>500$ - 1000$</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormRegestration;
