import React, { useState, useEffect } from "react";
import axios from "axios";

function Cashier() {
  // useStates for inputs
  const [accountNumber, setAccountNumber] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [depositAmount, setDepositAmount] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");

  // useState for detailsObject
  const [accountDetails, setAccountDetails] = useState(null);

  // useState for transaction history
  const [transcationsList, setTransactionList] = useState([]);

  // function for search account details
  const searchButtonHandler = () => {
    console.log(accountNumber);
    // e.preventDefault();
  };

  // function for withdrawals
  const withdrawalsHandler = () => {
    console.log(withdrawAmount);
  };

  // function for deposits
  const depositHandler = () => {
    console.log(depositAmount);
  };

  // function for transcations
  const transactionHandler = () => {
    console.log(transactionAmount);
  };

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
              value={accountNumber}
              onChange={(event) => setAccountNumber(event.target.value)}
            />
            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginLeft: "5px" }}
              onClick={searchButtonHandler}
            >
              Search
            </button>
          </div>
          <label>Account Details</label>
          <div
            style={{
              border: "1px solid black",
              marginTop: "5%",
            }}
          >
            {accountDetails !== null ? (
              <>
                {/* accountDetails.totalAmount [like this]*/}
                {/* accountDetails.totalAmount [like this]*/}
                {/* accountDetails.totalAmount [like this]*/}
              </>
            ) : (
              <>
                {" "}
                <h5>Please enter the account number</h5>
              </>
            )}
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
                value={withdrawAmount}
                onChange={(event) => setWithdrawAmount(event.target.value)}
              />
              <button
                type="submit"
                className="btn btn-success"
                style={{ marginLeft: "5px" }}
                onClick={withdrawalsHandler}
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
                  value={depositAmount}
                  onChange={(event) => setDepositAmount(event.target.value)}
                />
                <button
                  type="submit"
                  className="btn btn-success"
                  style={{ marginLeft: "5px" }}
                  onClick={depositHandler}
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
                    value={transactionAmount}
                    onChange={(event) =>
                      setTransactionAmount(event.target.value)
                    }
                  />
                  <button
                    type="submit"
                    className="btn btn-success"
                    style={{ marginLeft: "5px" }}
                    onClick={transactionHandler}
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
