import React from "react";
import "./Delivery.css";
import TOGLE from "../assets/product/controls.png";
import PIZZA from "../Deliveryasset/Pizza.avif";
import BURGER from "../Deliveryasset/Burger.avif";

import SWICH from "../Deliveryasset/Sandwich.avif";
import THALI from "../Deliveryasset/Thali.avif";
import BIRYANI from "../Deliveryasset/Biryani.avif";
import ROLLS from "../Deliveryasset/Rolls.avif";
import NINDIAN from "../Deliveryasset/Northindian.avif";
import CHIKS from "../Deliveryasset/Chicken.avif";
import FRICE from "../Deliveryasset/Friedrice.avif";
import NDALS from "../Deliveryasset/Noodles.avif";
import DOSA from "../Deliveryasset/Dosa.avif";
import CAKE from "../Deliveryasset/Cake.avif";
import MACD from "../Deliveryasset/Macd.avif";
import BKING from "../Deliveryasset/Burgerking.avif";
import LAPINOZ from "../Deliveryasset/Lapinoz.avif";
import DOMINOS from "../Deliveryasset/Dominos.avif";
import SUB from "../Deliveryasset/Subway.avif";
import HONEST from "../Deliveryasset/Honest.avif";
import SHAKTI from "../Deliveryasset/Shakti.avif";
import FONWY from "../Deliveryasset/Foodonway.avif";
import LMILA from "../Deliveryasset/Lamilano.avif";
import JBHAV from "../Deliveryasset/Jaybhavani.avif";
import DELV1 from "../Deliveryrestrauassets/Deliverey1.avif";
import DELV2 from "../Deliveryrestrauassets/Delivery2.avif";
import DELV3 from "../Deliveryrestrauassets/Delivery3.avif";
import MAX from "../Deliveryrestrauassets/Maxsafety.avif";
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
      <div className="container Brandslider">
        <h2>Inspiration for your first order</h2>
      </div>
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide container"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <div class="row row-cols-1 row-cols-md-8 g-6">
              <div className="Roundslider">
                <div className="body">
                  <img
                    src={PIZZA}
                    class="card-img-top Roundsliderimg"
                    alt="..."
                  />
                  <h5 class="card-title CardTitle">Pizza</h5>
                </div>
                <div className="body">
                  <img
                    src={BURGER}
                    class="card-img-top Roundsliderimg"
                    alt="..."
                  />
                  <h5 class="card-title CardTitle">Burger</h5>
                </div>
                <div className="body">
                  <img
                    src={CAKE}
                    class="card-img-top Roundsliderimg"
                    alt="..."
                  />
                  <h5 class="card-title CardTitle">Cake</h5>
                </div>
                <div className="body">
                  <img
                    src={SWICH}
                    class="card-img-top Roundsliderimg"
                    alt="..."
                  />
                  <h5 class="card-title CardTitle">Sandwich</h5>
                </div>
                <div className="body">
                  <img
                    src={THALI}
                    class="card-img-top Roundsliderimg"
                    alt="..."
                  />
                  <h5 class="card-title CardTitle">Thali</h5>
                </div>
                <div className="body">
                  <img
                    src={BIRYANI}
                    class="card-img-top Roundsliderimg"
                    alt="..."
                  />
                  <h5 class="card-title CardTitle ">Biryani</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item " data-bs-interval="2000">
            <div class="row row-cols-1 row-cols-md-8 g-6">
              <div className="Roundslider">
                <div className="body">
                  <img
                    src={ROLLS}
                    class="card-img-top Roundsliderimg"
                    alt="..."
                  />
                  <h5 class="card-title CardTitle">Rolls</h5>
                </div>
                <div className="body">
                  <img
                    src={NINDIAN}
                    class="card-img-top Roundsliderimg"
                    alt="..."
                  />
                  <h5 class="card-title CardTitle">North Indian</h5>
                </div>
                <div className="body">
                  <img
                    src={CHIKS}
                    class="card-img-top Roundsliderimg"
                    alt="..."
                  />
                  <h5 class="card-title CardTitle">Chicken</h5>
                </div>
                <div className="body">
                  <img
                    src={FRICE}
                    class="card-img-top Roundsliderimg"
                    alt="..."
                  />
                  <h5 class="card-title CardTitle">Fried Rice</h5>
                </div>
                <div className="body">
                  <img
                    src={NDALS}
                    class="card-img-top Roundsliderimg"
                    alt="..."
                  />
                  <h5 class="card-title CardTitle">Noodals</h5>
                </div>
                <div className="body">
                  <img
                    src={DOSA}
                    class="card-img-top Roundsliderimg"
                    alt="..."
                  />
                  <h5 class="card-title CardTitle ">Dosa</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev Carousel-Control-Prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next Carousel-Control-Next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      {/* <!---section2---> */}

      <div className="container Brandslider">
        <h2>Top brands for you</h2>
      </div>
      <div
        id="carouselExampleDark1"
        class="carousel carousel-dark slide container"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <div class="row row-cols-1 row-cols-md-8 g-6">
              <div className="Roundslider">
                <div className="body">
                  <img
                    src={MACD}
                    class="card-img-top Roundsliderimg Macdimg"
                    alt="..."
                  />
                  <h5 class="card-title CardTitle">McDonald's</h5>
                  <p class="card-text CardTitle">15 min</p>
                </div>
                <div className="body">
                  <img
                    src={LAPINOZ}
                    class="card-img-top Roundsliderimg"
                    alt="..."
                  />
                  <h5 class="card-title CardTitle">La Pino'z Pizza</h5>
                  <p class="card-text CardTitle">21 min</p>
                </div>
                <div className="body">
                  <img
                    src={BKING}
                    class="card-img-top Roundsliderimg"
                    alt="..."
                  />
                  <h5 class="card-title CardTitle">Burger King</h5>
                  <p class="card-text CardTitle">26 min</p>
                </div>
                <div className="body">
                  <img
                    src={DOMINOS}
                    class="card-img-top Roundsliderimg"
                    alt="..."
                  />
                  <h5 class="card-title CardTitle">Domino's Pizza</h5>
                  <p class="card-text CardTitle">28 min</p>
                </div>
                <div className="body">
                  <img
                    src={SHAKTI}
                    class="card-img-top Roundsliderimg"
                    alt="..."
                  />
                  <h5 class="card-title CardTitle">
                    shakti-The<br></br> Sandwich SHop
                  </h5>
                  <p class="card-text CardTitle">26 min</p>
                </div>
                <div className="body">
                  <img
                    src={FONWY}
                    class="card-img-top Roundsliderimg"
                    alt="..."
                  />
                  <h5 class="card-title CardTitle ">Food On Way</h5>
                  <p class="card-text CardTitle">33 min</p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item " data-bs-interval="2000">
            <div class="row row-cols-1 row-cols-md-8 g-6">
              <div className="Roundslide2">
                <div className="body">
                  <img
                    src={HONEST}
                    class="card-img-top Roundsliderimg"
                    alt="..."
                  />
                  <h5 class="card-title CardTitle">Honest</h5>
                  <p class="card-text CardTitle">26 min</p>
                </div>
                <div className="body">
                  <img
                    src={SUB}
                    class="card-img-top Roundsliderimg"
                    alt="..."
                  />
                  <h5 class="card-title CardTitle">Subway</h5>
                  <p class="card-text CardTitle">19 min</p>
                </div>
                <div className="body">
                  <img
                    src={JBHAV}
                    class="card-img-top Roundsliderimg"
                    alt="..."
                  />
                  <h5 class="card-title CardTitle">
                    Jay Bhavani<br></br>Vadapav
                  </h5>
                  <p class="card-text CardTitle">19 min</p>
                </div>
                <div className="body">
                  <img
                    src={LMILA}
                    class="card-img-top Roundsliderimg"
                    alt="..."
                  />
                  <h5 class="card-title CardTitle">La Milano Pizzeria</h5>
                  <p class="card-text CardTitle">25 min</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev Carousel-Control-Prev"
          type="button"
          data-bs-target="#carouselExampleDark1"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next Carousel-Control-Next"
          type="button"
          data-bs-target="#carouselExampleDark1"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      {/* -------Section 3---------- */}
      <div className="container Trendrestro">
        <h3>Trending dining restaurants in Ahmedabad</h3>
      </div>
      <div className="container Delivery">
        <div class="card Card1 Cardelivery1">
          <img src={DELV1} class="card-img-top Deli3" alt="..." />
          <div class="card-body ">
            <div class="card-title  Titledinning">
              <p className="Delismall">La Pino'z Pizza</p>
              <p className="New">
                4.1<i class="fa fa-star Star" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardTextmenu">
              Pizza,Pasta,It...
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>200 for Two
              </p>
            </p>
          </div>
          <p class="card-text CardTextkm">
            <p>6.2 km</p>
          </p>
          <h1 className="Hrline">
            <hr></hr>
          </h1>

          <div class="card-text CardTextimg">
            <img className="Maxsafety" src={MAX}></img>
            <p className="Maxsafetytext">
              Follows all Max Safety measures to ensure your food is same.
            </p>
          </div>
        </div>
        <div class="card Card1 Carddinning1">
          <img src={DELV2} class="card-img-top Dine2" alt="..." />
          <div class="card-body ">
            <div class="card-title Titledinning">
              <p className="Massala">Massala Theoryy</p>
              <p className="New">
                4.2<i class="fa fa-star Star" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardText2">
              North Indian,Mughlai,Chi..
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>500 for Two
              </p>
            </p>
            <p class="card-text CardText4">
              Bodakdev,Ahmedabad
              <p>5.6 km</p>
            </p>
          </div>
        </div>
        <div class="card Card1 Carddinning1">
          <img src={DELV3} class="card-img-top Dine3" alt="..." />
          <div class="card-img-overlay">
            <h5 class="card-title Textinner">Promoted</h5>
            <p class="card-text Imginner">
              <big>
                <img className="GOLD1" src=""></img> Flat 10% Off
              </big>
            </p>
          </div>
          <div class="card-body ">
            <div class="card-title Titledinning">
              <p className="Lithosphere">Lithosphere By Upper Crust</p>
              <p className="New">
                4.4<i class="fa fa-star Star" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardText2">
              Modern Indian,Asian..
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>1,800 for Two
              </p>
            </p>
            <p class="card-text CardText3">Bodakdev,Ahmedabad</p>
            <p class="card-text CardText2">
              <p style={{ color: "#C95A62" }}>Closes in 21 minutes</p>
              <p>6.2 km</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
