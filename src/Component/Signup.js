import React, { useState } from "react";
import "./Signup.css";
// import { NavLink } from "react-router-dom";
export default function Signup() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="Body">
      <div className="Form">
        <form>
          <div className="mb-3">
            <h2>Signup</h2>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Full-name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              required
              onChange={handleCheckboxChange}
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
          <button className={isChecked ? "Red" : "Silver"}>
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
              <span style={{ color: "rgb(239, 79, 95)" }}>Log in</span>
            </a>
          </h6>
        </form>
      </div>
    </div>
  );
}
