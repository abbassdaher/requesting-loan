import React, { useState } from "react";

function FormRegestration() {
  const [loan, setLoan] = useState({
    id: 0,
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salary: "",
  });
  let data = [loan];
  let btnIsDisable =
    loan.name == "" || loan.phoneNumber == "" || loan.age == "";
  let btnClass = "";
  if (btnIsDisable) {
    btnClass = "disabled-btn";
  } else {
    btnClass = "btn btn-primary";
  }
  return (
    <div>
      <form
        className="formStyle"
        onSubmit={(e) => {
          e.preventDefault();
          // setLoan({ ...loan, id: loan.id + 1 }); // increment id for each new loan request
          data.push({ ...loan, id: loan.id + 1 });

          e.target.reset(); // reset form fields after submission
          console.log(data);
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
            value={loan.name}
            onChange={(e) => {
              setLoan({ ...loan, name: e.target.value });
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
              setLoan({ ...loan, phoneNumber: e.target.value });
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            age:
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            onChange={(e) => {
              setLoan({ ...loan, age: e.target.value });
            }}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="employee"
            onChange={(e) => {
              setLoan({ ...loan, isEmployee: e.target.checked });
            }}
          />
          <label className="form-check-label" htmlFor="employee">
            are you an employee?
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="disabledSelect" className="form-label">
            salary
          </label>
          <select
            id=""
            className="form-select"
            onChange={(e) => {
              setLoan({ ...loan, salary: e.target.value });
            }}
          >
            <option value="500$">500$</option>
            <option value="500$ - 1000$">500$ - 1000$</option>
          </select>
        </div>
        <button
          type="submit"
          className={btnIsDisable ? "disabled-btn" : "btn btn-primary"}
          disabled={btnIsDisable}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormRegestration;
