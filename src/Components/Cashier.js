import React, { useState, useEffect } from "react";
import axios from "axios";

function Cashier() {
  return (
    <div className="container" style={{ margin: "5% auto" }}>
      <center>
        <h3 style={{ marginBottom: "5%" }}>Cashier</h3>
      </center>
      <div className="row">
        {/* left container */}
        <div className="col-6">
          <label>Account Number</label>
          <div style={{ display: "flex" }}>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter account ID"
              // value={employeeName}
              // onChange={(event) => setEmployeeName(event.target.value)}
            />
            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginLeft: "5px" }}
              // onClick={(e) => onSubmitHandler(e)}
            >
              Search
            </button>
          </div>
          <div
            style={{
              border: "1px solid black",
              marginTop: "5%",
            }}
          >
            <h4>Details here</h4>
            <h4>Details here</h4>
            <h4>Details here</h4>
            <h4>Details here</h4>
          </div>
        </div>

        {/* right container */}
        <div className="col-4" style={{ marginLeft: "10%" }}>
          <div>
            <label>Withdrawals</label>
            <div style={{ display: "flex" }}>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail23"
                aria-describedby="emailHelp"
                placeholder="Enter amount"
                // value={employeeName}
                // onChange={(event) => setEmployeeName(event.target.value)}
              />
              <button
                type="submit"
                className="btn btn-success"
                style={{ marginLeft: "5px" }}
                // onClick={(e) => onSubmitHandler(e)}
              >
                Withdraw
              </button>
            </div>
            <div>
              <label>Deposits</label>
              <div style={{ display: "flex" }}>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail2r3"
                  aria-describedby="emailHelp"
                  placeholder="Enter amount"
                  // value={employeeName}
                  // onChange={(event) => setEmployeeName(event.target.value)}
                />
                <button
                  type="submit"
                  className="btn btn-success"
                  style={{ marginLeft: "5px" }}
                  // onClick={(e) => onSubmitHandler(e)}
                >
                  Deposit
                </button>
              </div>
              <div>
                <label>Transactions</label>
                <div style={{ display: "flex" }}>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmailwe2r3"
                    aria-describedby="emailHelp"
                    placeholder="Enter amount"
                    // value={employeeName}
                    // onChange={(event) => setEmployeeName(event.target.value)}
                  />
                  <button
                    type="submit"
                    className="btn btn-success"
                    style={{ marginLeft: "5px" }}
                    // onClick={(e) => onSubmitHandler(e)}
                  >
                    Transfer
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <label>Transaction History</label>
            <div
              className="row text-center"
              style={{ border: "1px solid black" }}
            >
              <div className="col-sm-8">1</div>
              <div className="col-sm-8">2</div>
              <div className="col-sm-8">3</div>
              <div className="col-sm-8">4</div>
              <div className="col-sm-8">5</div>
              <div className="col-sm-8">6</div>
              <div className="col-sm-8">7</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cashier;
