import React from "react";
import ZOMATO from "../assets/product/Zomatologo.avif";
import { NavLink } from "react-router-dom";
import "./Nav.css";
export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <img src={ZOMATO} style={{ height: "30px", width: "80px" }} />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav mx-auto ">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  &nbsp;Ahmedabad
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      &nbsp;Baroda
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      &nbsp;Surat
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      &nbsp; Rajkot
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <div className="d-flex mx-auto" role="search">
              <input
                class="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              {/* <button class="btn btn-outline-success" type="submit">
                  Search
                </button> */}
            </div>
            <div className="navbar-nav">
              <NavLink
                style={{
                  textDecoration: "none",

                  fontSize: "20px",
                }}
                to="/signup"
              >
                Signup
              </NavLink>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <NavLink
                to="/login"
                style={{
                  textDecoration: "none",

                  fontSize: "20px",
                }}
              >
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
