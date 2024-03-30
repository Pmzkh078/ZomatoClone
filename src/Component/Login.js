import { useState } from "react";
import React from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [loginSuccess, setLoginSuccess] = useState(false);

  function inputChange(e) {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    }
  }

  function handeleSubmit(e) {
    e.preventDefault();

    if (email === "") {
      setEmailError("Email is required");
    } else if (email !== "patelpratikh98@gmail.com") {
      setEmailError("Email is wrong");
    } else {
      setEmailError("");
    }

    // Check if all conditions are met before setting login success
    if (email === "patelpratikh98@gmail.com") {
      setLoginSuccess(true);
      alert("Login success"); // Use console.log instead of document.write
    }
  }

  return (
    <div className="Body">
      <div className="container text-center">
        <div className="row">
          <div className="col-3 mx-auto">
            <form onSubmit={handeleSubmit}>
              <h2 className="Close">
                Login
                <NavLink to="/dinning">
                  <i class="fa fa-times Cross" aria-hidden="true"></i>
                </NavLink>
              </h2>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Email"
                  onChange={inputChange}
                />
                <div style={{ color: "red" }}>{emailError}</div>
              </div>
              <button id="Btnlogin" type="submit">
                <NavLink
                  to="/dinning"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Login
                </NavLink>
              </button>
              Or
              <button id="Googlemobile" type="button">
                <i class="fa fa-mobile" aria-hidden="true"></i>
                &nbsp; Continue with Mobile
              </button>
              <button id="Googlemobile" type="button">
                <i class="fa fa-google" aria-hidden="true"></i>&nbsp; Sign in
                with Google
              </button>
              <h6 style={{ color: "grey", marginTop: "20px" }}>
                New to Zomato?
                <a>
                  <NavLink style={{ textDecoration: "none" }} to="/Log1">
                    <span style={{ color: "rgb(239, 79, 95)" }}>Sign up</span>
                  </NavLink>
                </a>
              </h6>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
