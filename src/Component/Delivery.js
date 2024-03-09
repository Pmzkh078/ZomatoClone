import React from "react";
import "./Delivery.css";
import TOGLE from "../assets/product/controls.png";
export default function Delivery() {
  return (
    <div>
      <div className="container DeliveryNavbutton">
        <button type="button" class="btn btn-outline-secondary DeliveryBtn">
          <img style={{ height: "18px" }} src={TOGLE}></img>&nbsp;Filters
        </button>
        <button type="button" class="btn btn-outline-secondary DeliveryBtn">
          Sandwich
        </button>
        <button type="button" class="btn btn-outline-secondary DeliveryBtn">
          Rating 4.0+
        </button>
        <button type="button" class="btn btn-outline-secondary DeliveryBtn">
          Pure Veg
        </button>
        <div class="dropdown">
          <button
            class="btn btn-outline-secondary  DeliveryBtn  dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Cuisines
          </button>
          <ul class="dropdown-menu Dropmenu">
            <li>
              <a class="dropdown-item" href="#">
                <h4>Cuisines</h4>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-search Search" aria-hidden="true">
                  {" "}
                  <input type="search" placeholder="Search here"></input>
                </i>
              </a>
            </li>
            <hr></hr>
            <li class="dropdown-item">
              <a href="#">
                <button
                  id="CuisinesInerbtn"
                  type="button"
                  class="btn btn-secondary"
                >
                  Clear All
                </button>

                <button
                  id="CuisinesInerbtn2"
                  type="button"
                  class="btn btn-danger"
                >
                  Apply
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
