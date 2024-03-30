import React, { useState } from "react";
import "./Signup.css";
import { NavLink } from "react-router-dom";

export default function Signup() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const [email, setEmail] = useState("");
  const [name1, setName1] = useState("");
  const [name1Error, setName1Error] = useState("");
  const [emailError, setEmailError] = useState("");

  const [loginSuccess, setLoginSuccess] = useState(false);
  function inputChange1(e) {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
      setEmailError(""); // Clear previous error when input changes
    } else if (name === "Name") {
      setName1(value);
      setName1Error(""); // Clear previous error when input changes
    }
  }

  function handleSubmit1(e) {
    e.preventDefault();

    // Email validation
    if (email === "") {
      setEmailError("Email is required");
    } else if (email !== "patelpratikh98@gmail.com") {
      setEmailError("Email is wrong");
    }

    // Name validation
    if (name1 === "") {
      setName1Error("Name is required");
    }

    // Check if both email and name are valid before setting login success
    if (email === "patelpratikh98@gmail.com" && name1 !== "") {
      setLoginSuccess(true);

      alert("Signup success now you can login"); // Use console.log instead of alert
    }
  }

  return (
    <div className="Body">
      <div className="Form">
        <form onSubmit={handleSubmit1}>
          <div className="mb-3">
            <h2 className="Close2">
              Signup
              <NavLink to="/dinning">
                <i class="fa fa-times Cross" aria-hidden="true"></i>
              </NavLink>
            </h2>
            <input
              type="text"
              name="Name"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Full-name"
              onChange={inputChange1}
            />
          </div>
          <div style={{ color: "red" }}>{name1Error}</div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Email"
              onChange={inputChange1}
            />
          </div>
          <div style={{ color: "red" }}>{emailError}</div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              onChange={handleCheckboxChange}
              required
            />
            <label
              style={{
                color: "silver",
                textAlign: "left",
                marginLeft: "25px",
                fontSize: "15px",
              }}
              className="form-check-label"
              htmlFor="exampleCheck1"
            >
              I agree to Zomato's
              <a
                style={{ color: "rgb(239, 79, 95)", textDecoration: "none" }}
                href="https://www.zomato.com/policies/terms-of-service/"
              >
                Terms of Service, Privacy Policy
              </a>
              &nbsp; and &nbsp;
              <a
                style={{ color: "rgb(239, 79, 95)", textDecoration: "none" }}
                href="https://zomato.com/policies/"
              >
                Content Policies
              </a>
            </label>
          </div>
          <button on className={isChecked ? "Red" : "Silver"} type="submit">
            Create Account
          </button>
          <h6 style={{ color: "grey", marginTop: "20px", textAlign: "center" }}>
            Or
          </h6>
          <button id="btn2" type="button">
            <i className="fa fa-google" aria-hidden="true"></i>&nbsp; Sign in
            with Google
          </button>
          <h6 style={{ color: "grey", marginTop: "20px" }}>
            Already have an account?
            <a>
              <NavLink style={{ textDecoration: "none" }} to="/Sin1">
                {" "}
                <span style={{ color: "rgb(239, 79, 95)" }}>Log in</span>
              </NavLink>
            </a>
          </h6>
        </form>
      </div>
    </div>
  );
}
