import React from "react";
import "./Nightout.css";
import NIT1 from "../Nightoutasset/Nightoutreastrau1.avif";
import NIT2 from "../Nightoutasset/Nightoutreastrau2.png";
import NIT3 from "../Nightoutasset/Nightoutreastrau3.png";
import THALI from "../assets/product/Gujaratithali.avif";
import NIT4 from "../Nightoutasset/Nightoutreastrau4.png";
import NIT5 from "../Nightoutasset/Nightoutreastrau5.png";
import PIZZA from "../assets/product/Pizza.avif";
import NIT6 from "../Nightoutasset/Nightoutreastrau6.png";
import POSTR from "../assets/product/GoldPoster.avif";
import GOLD from "../assets/product/Zomatogold.webp";
import TOGLE from "../assets/product/controls.png";
import NIT7 from "../Nightoutasset/Nightout1.avif";
import NIT8 from "../Nightoutasset/Nightout2.avif";
import NIT9 from "../Nightoutasset/Nightout3.avif";
import NIT10 from "../Nightoutasset/Endnightout.avif";
import Footer from "./Footer";

export default function Nightout() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div id="Collections" class="col">
            <h1 className="Collections1">Collections</h1>
          </div>
        </div>
      </div>
      <div class="container ">
        <div class="row">
          <div class="col">
            <p className="Collections">
              Explore curated lists of top restaurants, cafes, pubs, and bars in
              Ahmedabad, based on trends
              <span className="ms-5">
                All collections in Ahmedabad &nbsp;&nbsp;
                <i class="fa fa-arrow-right Right" aria-hidden="true"></i>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col">
            <div id="carouselExample" class="carousel carousel-dark slide ">
              <div class="carousel-inner container">
                <div class="carousel-item active">
                  <div className="class-wrapper">
                    <div class="card Card2 Nightoutcard">
                      <div class="card-img-overlay ImgOverlay">
                        <h5 class="card-title">So What's New</h5>
                        <p class="card-text">13 Places</p>
                      </div>
                      <div className="image-wrapper">
                        <img
                          src={NIT1}
                          class="card-img-top card-img-top NightoutImg"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div class="card Card2  Nightoutcard">
                      <div className="image-wrapper">
                        <img
                          src={NIT2}
                          class="card-img-top card-img-top NightoutImg "
                          alt="..."
                        />
                      </div>
                      <div class="card-img-overlay ImgOverlay">
                        <h5 class="card-title">Dine For The Gram</h5>
                        <p class="card-text">8 Places</p>
                      </div>
                    </div>
                    <div class="card Card2  Nightoutcard">
                      <div className="image-wrapper">
                        <img
                          src={NIT3}
                          class="card-img-top card-img-top NightoutImg"
                          alt="..."
                        />
                      </div>
                      <div class="card-img-overlay ImgOverlay">
                        <h5 class="card-title">Pan Asian Mood</h5>
                        <p class="card-text">14 Places</p>
                      </div>
                    </div>
                    <div class="card Card2  Nightoutcard">
                      <div className="image-wrapper">
                        <img
                          src={THALI}
                          class="card-img-top card-img-top NightoutImg "
                          alt="..."
                        />
                      </div>
                      <div class="card-img-overlay ImgOverlay">
                        <h5 class="card-title">Gujarati Thalis</h5>
                        <p class="card-text">8 Places</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item  Nightoutcard">
                  <div className="class-wrapper">
                    <div class="card Card2">
                      <div className="image-wrapper">
                        <img
                          src={NIT4}
                          class="card-img-top card-img-top NightoutImg"
                          alt="..."
                        />
                      </div>
                      <div class="card-img-overlay ImgOverlay">
                        <h5 class="card-title">Best in Ahmedabad</h5>
                        <p class="card-text">21 Places</p>
                        <p class="card-text">
                          <small>Last updated 3 mins ago</small>
                        </p>
                      </div>
                    </div>
                    <div class="card Card2  Nightoutcard">
                      <img
                        src={NIT5}
                        class="card-img-top card-img-top NightoutImg"
                        alt="..."
                      />

                      <div class="card-img-overlay ImgOverlay">
                        <h5 class="card-title">What A View</h5>
                        <p class="card-text">8 Places</p>
                      </div>
                    </div>
                    <div class="card Card2  Nightoutcard">
                      <div className="image-wrapper">
                        <img
                          src={PIZZA}
                          class="card-img-top card-img-top NightoutImg "
                          alt="..."
                        />
                      </div>
                      <div class="card-img-overlay ImgOverlay">
                        <h5 class="card-title">Pizza On My Mind</h5>
                        <p class="card-text">9 Places</p>
                      </div>
                    </div>

                    <div class="card Card2  Nightoutcard">
                      <img
                        src={NIT6}
                        class="card-img-top Table card-img-top NightoutImg"
                        alt="..."
                      />
                      <div class="card-img-overlay ImgOverlay">
                        <h5 class="card-title">The Big Fat Buffet</h5>
                        <p class="card-text">6 Places</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container  Goldnightout ">
        <button type="button" class="btn btn-outline-secondary Goldbtnnout">
          <img style={{ height: "22px" }} src={TOGLE}></img>&nbsp;Filters
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-outline-secondary Goldbtnnout">
          <img style={{ height: "22px" }} src={GOLD}></img>&nbsp;Gold
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-outline-secondary Goldbtnnout">
          Rating: 4.0+
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-outline-secondary Goldbtnnout">
          Pubs & Bars
        </button>
      </div>
      <div className="container">
        <img src={POSTR} className=" Goldposter"></img>
      </div>
      <div className="container">
        <h3>Nightlife Restaurants in Ahmedabad</h3>
      </div>
      <div className="container Nightoutrestrau">
        <div class="card CarNightout1 Card2">
          <img src={NIT7} class="card-img-top Dine2" alt="..." />
          <div class="card-body ">
            <div class="card-title Titlenightout">
              <p className="Mahamahal">Air Bistro</p>
              <p className="Nightoutstar">
                New<i class="fa fa-star Star" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardText2">
              Fast Food,Pizza,...
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>1,500 for Two
              </p>
            </p>
            <p class="card-text CardText3">Bodakdev,Ahmedabad</p>
            <p class="card-text CardText2">
              <p style={{ color: "#C95A62" }}>Opens At 5pm</p>
              <p>6 km</p>
            </p>
          </div>
        </div>
        <div class="card CarNightout1 Card2">
          <img src={NIT8} class="card-img-top Dine2" alt="..." />
          <div class="card-body ">
            <div class="card-title Titlenightout">
              <p className="Massala">The Lounge</p>
              <p className="Nightoutstar1">
                -<i class="fa fa-star gryStar" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardText2">
              North Indian,Sout,..
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>1000 for Two
              </p>
            </p>
            <p class="card-text CardText4">
              SVPI Airport,Ahmedabad
              <p>6.3 km</p>
            </p>
          </div>
        </div>
        <div class="card CarNightout1 Card2 ">
          <img src={NIT9} class="card-img-top Dine3" alt="..." />
          <div class="card-body ">
            <div class="card-title Titlenightout">
              <p className="Lithosphere">Rooh The Roofyard Cafe</p>
              <p className="Nightoutstar">
                New<i class="fa fa-star Star" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardText2">
              Fast Food,North Indian,..
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>2,000 for Two
              </p>
            </p>

            <p class="card-text CardText4">
              Karai,Gandhinagar
              <p>16.2 km</p>
            </p>
          </div>
        </div>
      </div>
      <div class="container text-center Endsection">
        <div class="row">
          <div class="col">
            <h2 className="Sresult">End of search results</h2>
          </div>
          <div class="col">
            <img className="Engimg" src={NIT10}></img>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
