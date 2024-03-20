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
import MAX from "../Deliveryrestrauassets/Maxsafety.avif";
import FTRUCK from "../Deliveryasset/9834.avif";
import TPOST from "../Deliveryasset/TeaPost.avif";
import SAFE from "../Deliveryrestrauassets/Safedelivery.webp";
import DELV1 from "../Deliveryrestrauassets/Deliverey1.avif";
import DELV2 from "../Deliveryrestrauassets/Delivery2.avif";
import DELV3 from "../Deliveryrestrauassets/Delivery3.avif";
import DELV4 from "../Deliveryrestrauassets/Delivery4.avif";
import DELV5 from "../Deliveryrestrauassets/Delivery5.avif";
import DELV6 from "../Deliveryrestrauassets/Delivery6.avif";
import DELV7 from "../Deliveryrestrauassets/Delivery7.avif";
import DELV8 from "../Deliveryrestrauassets/Delivery8.avif";
import DELV9 from "../Deliveryrestrauassets/Delivery9.avif";
import DELV10 from "../Deliveryrestrauassets/Delivery10.avif";
import DELV11 from "../Deliveryrestrauassets/Delivery11.avif";
import DELV12 from "../Deliveryrestrauassets/Delivery12.avif";
import DELV13 from "../Deliveryrestrauassets/Delivery13.avif";
import DELV14 from "../Deliveryrestrauassets/Delivery14.avif";
import DELV15 from "../Deliveryrestrauassets/Delivery15.avif";
import DELV16 from "../Deliveryrestrauassets/Delivery16.avif";
import DELV17 from "../Deliveryrestrauassets/Delivery17.avif";
import DELV18 from "../Deliveryrestrauassets/Delivery18.avif";
import DELV19 from "../Deliveryrestrauassets/Delivery19.avif";
import DELV20 from "../Deliveryrestrauassets/Delivery20.avif";
import DELV21 from "../Deliveryrestrauassets/Delivery21.webp";
import DELV22 from "../Deliveryrestrauassets/Delivery22.avif";
import DELV23 from "../Deliveryrestrauassets/Delivery23.avif";
import DELV24 from "../Deliveryrestrauassets/Delivery24.avif";
import DELV25 from "../Deliveryrestrauassets/Delivery25.avif";
import DELV26 from "../Deliveryrestrauassets/Delivery26.avif";
import DELV27 from "../Deliveryrestrauassets/Delivery27.avif";
import DELV28 from "../Deliveryrestrauassets/Delivery28.avif";
import DELV29 from "../Deliveryrestrauassets/Delivery29.avif";
import DELV30 from "../Deliveryrestrauassets/Delivery30.avif";
import Footer from "./Footer";
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
      <div id="Collections1" className="container Brandslider">
        <h2>Inspiration for your first order</h2>
      </div>
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide container  "
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
              <div className="Roundslider">
                <div className="body">
                  <img
                    src={MACD}
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
                <div className="body">
                  <img
                    src={FTRUCK}
                    class="card-img-top Roundsliderimg"
                    alt="..."
                  />
                  <h5 class="card-title CardTitle">9834 The Fruit Truck</h5>
                  <p class="card-text CardTitle">20 min</p>
                </div>
                <div className="body">
                  <img
                    src={TPOST}
                    class="card-img-top Roundsliderimg"
                    alt="..."
                  />
                  <h5 class="card-title CardTitle">Tea Post</h5>
                  <p class="card-text CardTitle">31 min</p>
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
      <div className="container">
        <h3>Delivery Restaurants in Ahmedabad</h3>
      </div>
      <div className="container Delivery">
        <div class="card Card1 Cardelivery1">
          <div class="card-img-overlay">
            <p class="card-text Delimginner1">
              <big>
                <img className="BLUE1" src=""></img> 50% OFF
              </big>
            </p>
          </div>
          <img src={DELV1} class="card-img-top Deli3" alt="..." />
          <div class="card-body ">
            <div class="card-title  Titledinning">
              <p className="Delilarge ">La Pino'z Pizza</p>
              <p className="Newstar">
                4.1<i class="fa fa-star Delstar" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardTextmenu">
              Pizza,Pasta,It...
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>200 for one
              </p>
            </p>
          </div>
          <p class="card-text CardTextkm">
            <p>19 min</p>
          </p>
          <h1 className="Hrline">
            <hr></hr>
          </h1>

          <div class="card-text CardTextimg">
            <img className="Maxsafety" src={MAX}></img>
            <p className="Maxsafetytext">
              Follows all Max Safety measures to ensure your food is safe.
            </p>
          </div>
        </div>
        <div class="card Card1 Cardelivery1">
          <img src={DELV2} class="card-img-top Deli3" alt="..." />
          <div class="card-img-overlay">
            <p class="card-text Delimginner1">
              <big>
                <img className="BLUE1" src=""></img> 50% OFF
              </big>
            </p>
          </div>
          <div class="card-body ">
            <div class="card-title  Titledinning">
              <p className="Delismall">McDonald's</p>
              <p className="Newstar">
                4.1<i class="fa fa-star Delstar" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardTextmenu">
              Burger,Fast Food,De...
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>200 for one
              </p>
            </p>
          </div>
          <p class="card-text CardTextkm">
            <p>14 min</p>
          </p>
          <h1 className="Hrline">
            <hr></hr>
          </h1>

          <div class="card-text CardTextimg">
            <img className="Maxsafety" src={MAX}></img>
            <p className="Maxsafetytext">
              Follows all Max Safety measures to ensure your food is safe.
            </p>
          </div>
        </div>
        <div class="card Card1 Cardelivery1">
          <img src={DELV3} class="card-img-top Deli3" alt="..." />
          <div class="card-img-overlay">
            <h5 class="card-title Deltextinner ">Promoted</h5>
            <p class="card-text Delimginner">
              <big>
                <img className="BLUE1" src=""></img> 50% OFF
              </big>
            </p>
          </div>
          <div class="card-body ">
            <div class="card-title  Titledinning">
              <p className="Delismall">shreejikrupa</p>
              <p className="Newstar">
                4.2<i class="fa fa-star Delstar" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardTextmenu">
              Sandwich,Fast Food,...
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>200 for one
              </p>
            </p>
          </div>
          <p class="card-text CardTextkm">
            <p>20 min</p>
          </p>
          <h1 className="Hrline">
            <hr></hr>
          </h1>

          <div class="card-text CardTextimg">
            <img className="safety" src={SAFE}></img>
            <p className="Maxsafetytext">
              Restaurant partner follows WHO protocol
            </p>
          </div>
        </div>
      </div>
      <div className="container Delivery">
        <div class="card Card1 Cardelivery2">
          <div class="card-img-overlay">
            <p class="card-text Delimginner1">
              <big>
                <img className="BLUE1" src=""></img> 50% OFF
              </big>
            </p>
          </div>
          <img src={DELV4} class="card-img-top Deli3" alt="..." />
          <div class="card-img-overlay">
            <h5 class="card-title Deltextinner ">Promoted</h5>
            <p class="card-text Delimginner">
              <big>
                <img className="BLUE1" src=""></img> 20% OFF
              </big>
            </p>
          </div>
          <div class="card-body ">
            <div class="card-title  Titledinning">
              <p className="Delismall">Hocco Eatery</p>
              <p className="Newstar">
                4.2<i class="fa fa-star Delstar" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardTextmenu">
              Pizza,Fast Food,...
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>200 for One
              </p>
            </p>
          </div>
          <p class="card-text CardTextkm">
            <p>22 min</p>
          </p>
        </div>
        <div class="card Card1 Cardelivery1">
          <img src={DELV5} class="card-img-top Deli8 " alt="..." />
          <div class="card-img-overlay">
            <p class="card-text Delimginner1">
              <big>
                <img className="BLUE1" src=""></img> 50% OFF
              </big>
            </p>
          </div>
          <div class="card-body ">
            <div class="card-title  Titledinning">
              <p className="Delismall">Burger King</p>
              <p className="Newstar">
                3.7<i class="fa fa-star Delstar" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardTextmenu">
              Burger,Fast Food,De...
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>200 for Two
              </p>
            </p>
          </div>
          <p class="card-text CardTextkm">
            <p>25 min</p>
          </p>
          <h1 className="Hrline">
            <hr></hr>
          </h1>

          <div class="card-text CardTextimg">
            <img className="Maxsafety" src={MAX}></img>
            <p className="Maxsafetytext">
              Follows all Max Safety measures to ensure your food is safe.
            </p>
          </div>
        </div>
        <div class="card Card1 Cardelivery1">
          <img src={DELV6} class="card-img-top Deli7" alt="..." />
          <div class="card-img-overlay">
            <h5 class="card-title Deltextinner ">Promoted</h5>
            <p class="card-text Delimginner">
              <big>
                <img className="BLUE1" src=""></img> 50% OFF
              </big>
            </p>
          </div>
          <div class="card-body ">
            <div class="card-title  Titledinning">
              <p className="Delimid">La Milano Pizzeria</p>
              <p className="Newstar">
                4.0<i class="fa fa-star Delstar" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardTextmenu">
              Pizza,Pasta,It..
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>200 for One
              </p>
            </p>
          </div>
          <p class="card-text CardTextkm">
            <p>24 min</p>
          </p>
          <h1 className="Hrline">
            <hr></hr>
          </h1>
          <div class="card-text CardTextimg">
            <img className="Maxsafety" src={MAX}></img>
            <p className="Maxsafetytext">
              Follows all Max Safety measures to ensure your food is safe.
            </p>
          </div>
        </div>
      </div>
      <div className="container Delivery">
        <div class="card Card1 Cardelivery1">
          <div class="card-img-overlay">
            <p class="card-text Delimginner1">
              <big>
                <img className="BLUE1"></img> 50% OFF
              </big>
            </p>
          </div>
          <img src={DELV7} class="card-img-top Deli4" alt="..." />
          <div class="card-body ">
            <div class="card-title  Titledinning">
              <p className="Delismall">Das Khaman</p>
              <p className="Newstar">
                4.3<i class="fa fa-star Delstar" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardTextmenu">
              Gujarati,Street Food,...
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>200 for one
              </p>
            </p>
          </div>
          <p class="card-text CardTextkm">
            <p>11 min</p>
          </p>
          <h1 className="Hrline">
            <hr></hr>
          </h1>

          <div class="card-text CardTextimg">
            <img className="Maxsafety" src={MAX}></img>
            <p className="Maxsafetytext">
              Follows all Max Safety measures to ensure your food is safe.
            </p>
          </div>
        </div>
        <div class="card Card1 Cardelivery1">
          <img src={DELV8} class="card-img-top Deli4" alt="..." />
          <div class="card-img-overlay">
            <h5 class="card-title Deltextinner ">Promoted</h5>
            <p class="card-text Delimginner">
              <big>
                <img className="BLUE1" src=""></img> 50% OFF
              </big>
            </p>
          </div>
          <div class="card-body ">
            <div class="card-title  Titledinning">
              <p className="Delilarge">Gwalia Sweets & Fast Food</p>
              <p className="Newstar">
                4.2<i class="fa fa-star Delstar" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardTextmenu">
              Mithai,Street Food,...
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>200 for one
              </p>
            </p>
          </div>
          <p class="card-text CardTextkm">
            <p>15 min</p>
          </p>
          <h1 className="Hrline">
            <hr></hr>
          </h1>

          <div class="card-text CardTextimg">
            <img className="Maxsafety" src={MAX}></img>
            <p className="Maxsafetytext">
              Follows all Max Safety measures to ensure your food is safe.
            </p>
          </div>
        </div>
        <div class="card Card1 Cardelivery1">
          <img src={DELV9} class="card-img-top Deli4" alt="..." />
          <div class="card-img-overlay">
            <h5 class="card-title Deltextinner ">Promoted</h5>
            <p class="card-text Delimginner">
              <big>
                <img className="BLUE1" src=""></img> 50% OFF
              </big>
            </p>
          </div>
          <div class="card-body ">
            <div class="card-title  Titledinning">
              <p className="Delimid">Jugaadi Adda</p>
              <p className="Newstar">
                3.6<i class="fa fa-star Delstar" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardTextmenu">
              Maharashtrian,Stre..
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>50 for one
              </p>
            </p>
          </div>
          <p class="card-text CardTextkm">
            <p>21 min</p>
          </p>
          <h1 className="Hrline">
            <hr></hr>
          </h1>

          <div class="card-text CardTextimg">
            <img className="Maxsafety" src={MAX}></img>
            <p className="Maxsafetytext">
              Follows all Max Safety measures to ensure your food is safe.
            </p>
          </div>
        </div>
      </div>
      <div className="container Delivery">
        <div class="card Card1 Cardelivery1">
          <div class="card-img-overlay">
            <p class="card-text Delimginner1">
              <big>
                <img className="BLUE1"></img>40% OFF
              </big>
            </p>
          </div>
          <img src={DELV10} class="card-img-top Deli4" alt="..." />
          <div class="card-body ">
            <div class="card-title  Titledinning">
              <p className="Delismall">Jay Jalaram Parotha House</p>
              <p className="Newstar">
                3.6<i class="fa fa-star Delstar" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardTextmenu">
              Gujarati,North Indian,...
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>50 for one
              </p>
            </p>
          </div>
          <p class="card-text CardTextkm">
            <p>23 min</p>
          </p>
          <h1 className="Hrline">
            <hr></hr>
          </h1>

          <div class="card-text CardTextimg">
            <img className="Maxsafety" src={MAX}></img>
            <p className="Maxsafetytext">
              Follows all Max Safety measures to ensure your food is safe.
            </p>
          </div>
        </div>
        <div class="card Card1 Cardelivery1">
          <div class="card-img-overlay">
            <p class="card-text Delimginner1">
              <big>
                <img className="BLUE1"></img> 50% OFF
              </big>
            </p>
          </div>
          <img src={DELV11} class="card-img-top Deli4" alt="..." />
          <div class="card-body ">
            <div class="card-title  Titledinning">
              <p className="Delismall">Ladli Restaurant</p>
              <p className="Newstar">
                3.6<i class="fa fa-star Delstar" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardTextmenu">
              North Indian,Street Food,...
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>200 for one
              </p>
            </p>
          </div>
          <p class="card-text">
            <p className="CardTextkm">27 min</p>
          </p>
          <h1 className="Hrline">
            <hr></hr>
          </h1>
          <div class="card-text CardTextimg">
            <img className="Maxsafety" src={MAX}></img>
            <p className="Maxsafetytext">
              Follows all Max Safety measures to ensure your food is safe.
            </p>
          </div>
        </div>
        <div class="card Card1 Cardelivery1">
          <div class="card-img-overlay">
            <p class="card-text Delimginner1">
              <big>
                <img className="BLUE1"></img> 10% OFF
              </big>
            </p>
          </div>
          <img src={DELV12} class="card-img-top Deli4" alt="..." />
          <div class="card-body ">
            <div class="card-title  Titledinning">
              <p className="Delismall">City Corner</p>
              <p className="Newstar">
                4.2<i class="fa fa-star Delstar" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardTextmenu">
              Fast Food,Chinese...
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>50 for one
              </p>
            </p>
          </div>
          <p class="card-text CardTextkm">
            <p>38 min</p>
          </p>
          <h1 className="Hrline">
            <hr></hr>
          </h1>

          <div class="card-text CardTextimg">
            <img className="Maxsafety" src={MAX}></img>
            <p className="Maxsafetytext">
              Follows all Max Safety measures to ensure your food is safe.
            </p>
          </div>
        </div>
      </div>
      <div className="container Delivery">
        <div class="card Card1 Cardelivery2">
          <div class="card-img-overlay">
            <p class="card-text Delimginner1">
              <big>
                <img className="BLUE1" src=""></img> 50% OFF
              </big>
            </p>
          </div>
          <img src={DELV13} class="card-img-top Deli3" alt="..." />
          <div class="card-img-overlay">
            <h5 class="card-title Deltextinner ">Promoted</h5>
            <p class="card-text Delimginner">
              <big>
                <img className="BLUE1" src=""></img>50% OFF
              </big>
            </p>
          </div>
          <div class="card-body ">
            <div class="card-title  Titledinning">
              <p className="Delismall">Bole To Vadapav</p>
              <p className="Newstar">
                4.4<i class="fa fa-star Delstar" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardTextmenu">
              Maharashtrian,Stre...
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>50 for One
              </p>
            </p>
          </div>
          <p class="card-text CardTextkm">
            <p>29 min</p>
          </p>
        </div>
        <div class="card Card1 Cardelivery2">
          <div class="card-img-overlay">
            <p class="card-text Delimginner1">
              <big>
                <img className="BLUE1" src=""></img> 50% OFF
              </big>
            </p>
          </div>
          <img src={DELV14} class="card-img-top Deli5" alt="..." />
          <div class="card-img-overlay">
            <h5 class="card-title Deltextinner ">Promoted</h5>
            <p class="card-text Delimginner">
              <big>
                <img className="BLUE1" src=""></img> 20% OFF
              </big>
            </p>
          </div>
          <div class="card-body ">
            <div class="card-title  Titledinning">
              <p className="Delismall">The Lio' Pizza</p>
              <p className="Newstar">
                3.9<i class="fa fa-star Delstar" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardTextmenu">
              Pizza,Wraps,...
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>50 for One
              </p>
            </p>
          </div>
          <p class="card-text CardTextkm">
            <p>43 min</p>
          </p>
        </div>

        <div class="card Card1 Cardelivery1">
          <img src={DELV15} class="card-img-top Dine3" alt="..." />
          <div class="card-img-overlay">
            <h5 class="card-title Deltextinner ">Promoted</h5>
            <p class="card-text Delimginner">
              <big>
                <img className="BLUE1" src=""></img> 50% OFF
              </big>
            </p>
          </div>
          <div class="card-body ">
            <div class="card-title  Titledinning">
              <p className="Delimid">Eat Punjab</p>
              <p className="Newstar">
                4.1<i class="fa fa-star Delstar" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardTextmenu">
              North Indian,Chinese,Mu..
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>50 for One
              </p>
            </p>
          </div>
          <p class="card-text CardTextkm">
            <p>34 min</p>
          </p>
          <h1 className="Hrline">
            <hr></hr>
          </h1>
          <div class="card-text CardTextimg">
            <img className="Maxsafety" src={MAX}></img>
            <p className="Maxsafetytext">
              Follows all Max Safety measures to ensure your food is safe.
            </p>
          </div>
        </div>
      </div>
      <div className="container Delivery">
        <div class="card Card1 Cardelivery1">
          <img src={DELV16} class="card-img-top Dine3" alt="..." />
          <div class="card-img-overlay">
            <p class="card-text Delimginner">
              <big>
                <img className="BLUE1" src=""></img> 50% OFF
              </big>
            </p>
          </div>
          <div class="card-body ">
            <div class="card-title  Titledinning">
              <p className="Delimid">Hotel Moti Mahal</p>
              <p className="Newstar">
                3.8<i class="fa fa-star Delstar" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardTextmenu">
              North Indian,Chinese,..
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>50 for One
              </p>
            </p>
          </div>
          <p class="card-text CardTextkm">
            <p>26 min</p>
          </p>
          <h1 className="Hrline">
            <hr></hr>
          </h1>
          <div class="card-text CardTextimg">
            <img className="safety" src={SAFE}></img>
            <p className="Maxsafetytext">
              Restaurant partner follows WHO protocol
            </p>
          </div>
        </div>
        <div class="card Card1 Cardelivery2">
          <div class="card-img-overlay">
            <p class="card-text Delimginner1">
              <big>
                <img className="BLUE1" src=""></img> 50% OFF
              </big>
            </p>
          </div>
          <img src={DELV17} class="card-img-top Deli3" alt="..." />

          <div class="card-body ">
            <div class="card-title  Titledinning">
              <p className="Delismall">Wendy's Burgers</p>
              <p className="Newstar">
                4.1<i class="fa fa-star Delstar" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardTextmenu">
              Burger,Fast Food,..
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>50 for One
              </p>
            </p>
          </div>
          <p class="card-text CardTextkm">
            <p>30 min</p>
          </p>
        </div>

        <div class="card Card1 Cardelivery2">
          <img src={DELV18} class="card-img-top Deli5" alt="..." />
          <div class="card-img-overlay">
            <p class="card-text Delimginner">
              <big>
                <img className="BLUE1" src=""></img> 50% OFF
              </big>
            </p>
          </div>
          <div class="card-body ">
            <div class="card-title  Titledinning">
              <p className="Delismall">Farki</p>
              <p className="Newstar">
                4.6<i class="fa fa-star Delstar" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardTextmenu">
              Beverages,Ice cream,...
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>50 for One
              </p>
            </p>
          </div>
          <p class="card-text CardTextkm">
            <p>15 min</p>
          </p>
        </div>
      </div>
      <div className="container Delivery">
        <div class="card Card1 Cardelivery1">
          <div class="card-img-overlay">
            <p class="card-text Delimginner1">
              <big>
                <img className="BLUE1"></img>40% OFF
              </big>
            </p>
          </div>
          <img src={DELV19} class="card-img-top Deli4" alt="..." />
          <div class="card-body ">
            <div class="card-title  Titledinning">
              <p className="Delismall">Pizza Hut</p>
              <p className="Newstar">
                3.6<i class="fa fa-star Delstar" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardTextmenu">
              Pizza,Pasta,It..
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>200 for one
              </p>
            </p>
          </div>
          <p class="card-text CardTextkm">
            <p>23 min</p>
          </p>
          <h1 className="Hrline">
            <hr></hr>
          </h1>

          <div class="card-text CardTextimg">
            <img className="Maxsafety" src={MAX}></img>
            <p className="Maxsafetytext">
              Follows all Max Safety measures to ensure your food is safe.
            </p>
          </div>
        </div>
        <div class="card Card1 Cardelivery1">
          <div class="card-img-overlay">
            <p class="card-text Delimginner1">
              <big>
                <img className="BLUE1"></img> 50% OFF
              </big>
            </p>
          </div>
          <img src={DELV20} class="card-img-top Deli4" alt="..." />
          <div class="card-body ">
            <div class="card-title  Titledinning">
              <p className="Delismall">Al Baik Fast Food</p>
              <p className="Newstar">
                4.2<i class="fa fa-star Delstar" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardTextmenu">
              Shawarma,Pizza,...
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>200 for one
              </p>
            </p>
          </div>
          <p class="card-text">
            <p className="CardTextkm">25 min</p>
          </p>
          <h1 className="Hrline">
            <hr></hr>
          </h1>
          <div class="card-text CardTextimg">
            <img className="Maxsafety" src={MAX}></img>
            <p className="Maxsafetytext">
              Follows all Max Safety measures to ensure your food is safe.
            </p>
          </div>
        </div>
        <div class="card Card1 Cardelivery1">
          <div class="card-img-overlay">
            <p class="card-text Delimginner1">
              <big>
                <img className="BLUE1"></img> 10% OFF
              </big>
            </p>
          </div>
          <img src={DELV21} class="card-img-top Deli4" alt="..." />
          <div class="card-body ">
            <div class="card-title  Titledinning">
              <p className="Delismall">KFC</p>
              <p className="Newstar">
                3.7<i class="fa fa-star Delstar" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardTextmenu">
              Burger,Fast Food...
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>200 for one
              </p>
            </p>
          </div>
          <p class="card-text CardTextkm">
            <p>19 min</p>
          </p>
          <h1 className="Hrline">
            <hr></hr>
          </h1>

          <div class="card-text CardTextimg">
            <img className="Maxsafety" src={MAX}></img>
            <p className="Maxsafetytext">
              Follows all Max Safety measures to ensure your food is safe.
            </p>
          </div>
        </div>
      </div>
      <div className="container Delivery">
        <div class="card Card1 Cardelivery1">
          <img src={DELV22} class="card-img-top Dine3" alt="..." />
          <div class="card-img-overlay">
            <p class="card-text Delimginner">
              <big>
                <img className="BLUE1" src=""></img> 30% OFF
              </big>
            </p>
          </div>
          <div class="card-body ">
            <div class="card-title  Titledinning">
              <p className="Delimid">Shiva,s Coffee Bar & Snacks</p>
              <p className="Newstar">
                3.9<i class="fa fa-star Delstar" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardTextmenu">
              Fast Food,Str..
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>100 for One
              </p>
            </p>
          </div>
          <p class="card-text CardTextkm">
            <p>38 min</p>
          </p>
          <h1 className="Hrline">
            <hr></hr>
          </h1>
          <div class="card-text CardTextimg">
            <img className="safety" src={SAFE}></img>
            <p className="Maxsafetytext">
              Restaurant partner follows WHO protocol
            </p>
          </div>
        </div>
        <div class="card Card1 Cardelivery1">
          <img src={DELV23} class="card-img-top Dine3" alt="..." />
          <div class="card-img-overlay">
            <p class="card-text Delimginner">
              <big>
                <img className="BLUE1" src=""></img> 50% OFF
              </big>
            </p>
          </div>
          <div class="card-body ">
            <div class="card-title  Titledinning">
              <p className="Delimid">Food On Way</p>
              <p className="Newstar">
                3.9<i class="fa fa-star Delstar" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardTextmenu">
              North Indian,Chinese,..
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>100 for One
              </p>
            </p>
          </div>
          <p class="card-text CardTextkm">
            <p>30 min</p>
          </p>
          <h1 className="Hrline">
            <hr></hr>
          </h1>
          <div class="card-text CardTextimg">
            <img className="safety" src={SAFE}></img>
            <p className="Maxsafetytext">
              Restaurant partner follows WHO protocol
            </p>
          </div>
        </div>

        <div class="card Card1 Cardelivery2">
          <img src={DELV24} class="card-img-top " alt="..." />
          <div class="card-img-overlay">
            <p class="card-text Delimginner">
              <big>
                <img className="BLUE1" src=""></img> 50% OFF
              </big>
            </p>
          </div>
          <div class="card-body ">
            <div class="card-title  Titledinning">
              <p className="Delismall">Dangee Dums</p>
              <p className="Newstar">
                4.0<i class="fa fa-star Delstar" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardTextmenu">
              Beverages,Ice cream,...
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>100 for One
              </p>
            </p>
          </div>
          <p class="card-text CardTextkm">
            <p>13 min</p>
          </p>
        </div>
      </div>
      <div className="container Delivery">
        <div class="card Card1 Cardelivery1">
          <div class="card-img-overlay">
            <p class="card-text Delimginner1">
              <big>
                <img className="BLUE1"></img>40% OFF
              </big>
            </p>
          </div>
          <img src={DELV25} class="card-img-top Deli4" alt="..." />
          <div class="card-body ">
            <div class="card-title  Titledinning">
              <p className="Delismall">Live Cake Company</p>
              <p className="Newstar">
                3.8<i class="fa fa-star Delstar" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardTextmenu">
              Bakery
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>250 for one
              </p>
            </p>
          </div>
          <p class="card-text CardTextkm">
            <p>33 min</p>
          </p>
          <h1 className="Hrline">
            <hr></hr>
          </h1>

          <div class="card-text CardTextimg">
            <img className="Maxsafety" src={MAX}></img>
            <p className="Maxsafetytext">
              Follows all Max Safety measures to ensure your food is safe.
            </p>
          </div>
        </div>
        <div class="card Card1 Cardelivery1">
          <div class="card-img-overlay">
            <p class="card-text Delimginner1">
              <big>
                <img className="BLUE1"></img> 20% OFF
              </big>
            </p>
          </div>
          <img src={DELV26} class="card-img-top Deli4" alt="..." />
          <div class="card-body ">
            <div class="card-title  Titledinning">
              <p className="Delismall">Baked By Nini's</p>
              <p className="Newstar">
                4.2<i class="fa fa-star Delstar" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardTextmenu">
              Bakery,Desert,...
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>250 for one
              </p>
            </p>
          </div>
          <p class="card-text">
            <p className="CardTextkm">13 min</p>
          </p>
          <h1 className="Hrline">
            <hr></hr>
          </h1>
          <div class="card-text CardTextimg">
            <img className="Maxsafety" src={MAX}></img>
            <p className="Maxsafetytext">
              Follows all Max Safety measures to ensure your food is safe.
            </p>
          </div>
        </div>
        <div class="card Card1 Cardelivery1">
          <div class="card-img-overlay">
            <p class="card-text Delimginner1">
              <big>
                <img className="BLUE1"></img> 10% OFF
              </big>
            </p>
          </div>
          <img src={DELV27} class="card-img-top Deli4" alt="..." />
          <div class="card-body ">
            <div class="card-title  Titledinning">
              <p className="Delismall">Jasdi De Parathe</p>
              <p className="Newstar">
                4.3<i class="fa fa-star Delstar" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardTextmenu">
              Kebab,North Indian,...
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>200 for one
              </p>
            </p>
          </div>
          <p class="card-text CardTextkm">
            <p>33 min</p>
          </p>
          <h1 className="Hrline">
            <hr></hr>
          </h1>

          <div class="card-text CardTextimg">
            <img className="Maxsafety" src={MAX}></img>
            <p className="Maxsafetytext">
              Follows all Max Safety measures to ensure your food is safe.
            </p>
          </div>
        </div>
      </div>
      <div className="container Delivery">
        <div class="card Card1 Cardelivery2">
          <div class="card-img-overlay">
            <p class="card-text Delimginner1">
              <big>
                <img className="BLUE1" src=""></img> 30% OFF
              </big>
            </p>
          </div>
          <img src={DELV28} class="card-img-top Deli3" alt="..." />

          <div class="card-body ">
            <div class="card-title  Titledinning">
              <p className="Delismall">Standard's Punjabi</p>
              <p className="Newstar">
                3.5<i class="fa fa-star Delstar" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardTextmenu">
              Gujarati,North Indian,...
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>200 for One
              </p>
            </p>
          </div>
          <p class="card-text CardTextkm">
            <p>43 min</p>
          </p>
        </div>
        <div class="card Card1 Cardelivery2">
          <img src={DELV29} class="card-img-top Deli5" alt="..." />
          <div class="card-img-overlay">
            <p class="card-text Delimginner">
              <big>
                <img className="BLUE1" src=""></img> 50% OFF
              </big>
            </p>
          </div>
          <div class="card-body ">
            <div class="card-title  Titledinning">
              <p className="Delismall">Taco Bell</p>
              <p className="Newstar">
                3.6<i class="fa fa-star Delstar" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardTextmenu">
              Mexican,Wraps,...
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>200 for One
              </p>
            </p>
          </div>
          <p class="card-text CardTextkm">
            <p>27 min</p>
          </p>
        </div>

        <div class="card Card1 Cardelivery1">
          <img src={DELV30} class="card-img-top Dine3" alt="..." />
          <div class="card-img-overlay">
            <p class="card-text Delimginner">
              <big>
                <img className="BLUE1" src=""></img> 30% OFF
              </big>
            </p>
          </div>
          <div class="card-body ">
            <div class="card-title  Titledinning">
              <p className="Delimid">NIC Ice Creams</p>
              <p className="Newstar">
                4.4<i class="fa fa-star Delstar" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardTextmenu">
              Ice Cream,Desert,..
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>200 for One
              </p>
            </p>
          </div>
          <p class="card-text CardTextkm">
            <p>22 min</p>
          </p>
          <h1 className="Hrline">
            <hr></hr>
          </h1>
          <div class="card-text CardTextimg">
            <img className="safety" src={SAFE}></img>
            <p className="Maxsafetytext">
              Restaurant partner follows WHO protocol
            </p>
          </div>
        </div>
      </div>
      <a href="#Collections1">
        <button id="Sortbtn">^</button>
      </a>
      <Footer />
    </div>
  );
}
