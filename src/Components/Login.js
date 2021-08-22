import axios from "axios";
import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async () => {
    console.log("clicked" + email + " " + password);

    await axios
      .post("http://localhost:PORTNO/url", {
        email,
        password,
      })
      .then((response) => {
        if (response.status === 200) {
          //redirect part
          console.log(response.data);
          // if(response.data.)
          // props.history.push("/cashier");
        }
      })
      .catch((error) => {
        alert("error");
        console.log(error);
      });
  };
  return (
    <div style={{ width: "25%", margin: "15% auto" }}>
      <h3>Login</h3>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary" onClick={loginHandler}>
        Submit
      </button>
    </div>
  );
}

export default Login;
