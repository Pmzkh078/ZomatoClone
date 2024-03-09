import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="Body">
      <div className="container text-center">
        <div className="row">
          <div className="col-3 mx-auto">
            {" "}
            <form>
              <div className="mb-3">
                <h2>Login</h2>
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
              <button id="Btnlogin" type="submit">
                Login
              </button>
              Or
              <button id="Googlemobile" type="button">
                <i class="fa fa-mobile" aria-hidden="true"></i>
                &nbsp; Countinue with Mobile
              </button>
              <button id="Googlemobile" type="button">
                <i class="fa fa-google" aria-hidden="true"></i>&nbsp; Sign in
                with Google
              </button>
              <h6 style={{ color: "grey", marginTop: "20px" }}>
                New to Zomato?
                <a>
                  <span style={{ color: "red" }}>Signup</span>
                </a>
              </h6>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
