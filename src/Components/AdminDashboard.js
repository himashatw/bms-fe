import React, { useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [employeeName, setEmployeeName] = useState("");
  const [employeeEmail, setEmployeeEmail] = useState("");
  const [employeePassword, setEmployeePassword] = useState("");
  const [employeeType, setEmployeeType] = useState("Bank Officer");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // POST code here
    await axios
      .post("http://localhost:PORTNO/url", {
        employeeName,
        employeeEmail,
        employeePassword,
        employeeType,
      })
      .then(function (response) {
        if (response.status === 200 || response.status === 201) {
          alert("Employee Added Successfully");
        }
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        alert("Error");
      });
  };

  return (
    <div
      className="card"
      style={{ width: "50%", height: "50%", margin: " 10% auto" }}
    >
      <center>
        {" "}
        <h3>Admin Dashboard</h3>
        <h5>Employee Registration</h5>
      </center>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={employeeName}
            onChange={(event) => setEmployeeName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail2"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={employeeEmail}
            onChange={(event) => setEmployeeEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={employeePassword}
            onChange={(event) => setEmployeePassword(event.target.value)}
          />
        </div>
        <div className="custom-control custom-radio custom-control-inline">
          <input
            type="radio"
            id="customRadioInline1"
            name="customRadioInline1"
            className="custom-control-input"
            checked
            onClick={() => setEmployeeType("Bank Officer")}
          />
          <label className="custom-control-label" htmlFor="customRadioInline1">
            Bank Officer
          </label>
        </div>
        <div className="custom-control custom-radio custom-control-inline">
          <input
            type="radio"
            id="customRadioInline2"
            name="customRadioInline1"
            className="custom-control-input"
            onClick={() => setEmployeeType("Cashier")}
          />
          <label className="custom-control-label" htmlFor="customRadioInline2">
            Cashier
          </label>
        </div>
        <br />
        <center>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => onSubmitHandler(e)}
          >
            Submit
          </button>
        </center>
      </form>
    </div>
  );
}

export default AdminDashboard;
