import React from "react";
import "./Dinningout.css";
import NEWRES from "../assets/product/DinningOutballon.avif";
import MINAR from "../assets/product/Minargate.avif";
import SALAD from "../assets/product/Salad.avif";
import THALI from "../assets/product/Gujaratithali.avif";
import OMLET from "../assets/product/Omlet.avif";
import BROKI from "../assets/product/brok5.webp";
import PIZZA from "../assets/product/Pizza.avif";
import TABLE from "../assets/product/Table2.avif";
import POSTR from "../assets/product/GoldPoster.avif";
import GOLD from "../assets/product/Zomatogold.webp";
import TOGLE from "../assets/product/controls.png";
import DINE1 from "../assets/product/Dinning1.avif";
import DINE2 from "../assets/product/Dinning2.avif";
import DINE3 from "../assets/product/Dinning3.avif";
import DINE4 from "../assets/product/Dinning4.avif";
import DINE5 from "../assets/product/Dinning5.avif";
import DINE6 from "../assets/product/Dinning6.avif";
import DINE7 from "../assets/product/dinning7.avif";
import DINE8 from "../assets/product/dinning8.avif";
import DINE9 from "../assets/product/Dinning9.avif";
import DINE10 from "../assets/product/Dinning10.avif";
import DINE11 from "../assets/product/Dinning11.avif";
import DINE12 from "../assets/product/Dinning12.avif";
import DINE13 from "../assets/product/Dinning13.avif";
import DINE14 from "../assets/product/Dinning14.avif";
import DINE15 from "../assets/product/Dinning15.avif";
import DINE16 from "../assets/product/Dinning16.avif";
import DINE17 from "../assets/product/Dinning17.avif";
import DINE18 from "../assets/product/Dinning18.avif";
import DINE19 from "../assets/product/Dinning19.avif";
import DINE20 from "../assets/product/Dinning20.avif";
import DINE21 from "../assets/product/Dinning21.avif";
import DINE22 from "../assets/product/Dinning22.avif";
import DINE23 from "../assets/product/Dinning23.avif";
import DINE24 from "../assets/product/Dinning24.avif";
import DINE25 from "../assets/product/Dinning25.avif";
import DINE26 from "../assets/product/Dinning26.avif";
import DINE27 from "../assets/product/Dinning27.avif";
import DINE28 from "../assets/product/Dinning28.avif";
import DINE29 from "../assets/product/Dinning29.avif";
import DINE30 from "../assets/product/Dinning30.avif";
import Footer from "./Footer";
export default function Dinningout() {
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
            <div id="carouselExample" class="carousel carousel-dark slide">
              <div class="carousel-inner container">
                <div class="carousel-item active">
                  <div className="class-wrapper">
                    <div class="card Card2">
                      <div className="image-wrapper">
                        <img
                          src={NEWRES}
                          class="card-img-top card-img-top"
                          alt="..."
                        />
                      </div>
                      <div class="card-body CardBody">
                        <h5 class="card-title">Newly Opened Restaurants</h5>
                        <h6>
                          6 Places{" "}
                          <i
                            class="fa fa-arrow-right Right"
                            aria-hidden="true"
                          ></i>
                        </h6>
                      </div>
                    </div>
                    <div class="card Card2">
                      <div className="image-wrapper">
                        <img
                          src={MINAR}
                          class="card-img-top card-img-top "
                          alt="..."
                        />
                      </div>
                      <div class="card-body CardBody">
                        <h5 class="card-title">Best in Ahmedabad</h5>
                        <h6>
                          22 Places
                          <i
                            class="fa fa-arrow-right Right"
                            aria-hidden="true"
                          ></i>
                        </h6>
                      </div>
                    </div>
                    <div class="card Card2">
                      <div className="image-wrapper">
                        <img
                          src={SALAD}
                          class="card-img-top card-img-top"
                          alt="..."
                        />
                      </div>
                      <div class="card-body CardBody">
                        <h5 class="card-title">Great Buffets</h5>
                        <h6>
                          6 Places{" "}
                          <i
                            class="fa fa-arrow-right Right"
                            aria-hidden="true"
                          ></i>
                        </h6>
                      </div>
                    </div>
                    <div class="card Card2">
                      <div className="image-wrapper">
                        <img
                          src={THALI}
                          class="card-img-top card-img-top "
                          alt="..."
                        />
                      </div>
                      <div class="card-body CardBody">
                        <h5 class="card-title">Places for Gujarati Thalis</h5>
                        <h6>
                          8 Places{" "}
                          <i
                            class="fa fa-arrow-right Right"
                            aria-hidden="true"
                          ></i>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="class-wrapper">
                    <div class="card Card2">
                      <div className="image-wrapper">
                        <img
                          src={OMLET}
                          class="card-img-top card-img-top"
                          alt="..."
                        />
                      </div>
                      <div class="card-body CardBody">
                        <h5 class="card-title">Blissful Breakfast Places</h5>
                        <h6>
                          8 Places{" "}
                          <i
                            class="fa fa-arrow-right Right"
                            aria-hidden="true"
                          ></i>
                        </h6>
                      </div>
                    </div>
                    <div class="card Card2">
                      <img
                        src={BROKI}
                        class="card-img-top card-img-top "
                        alt="..."
                      />

                      <div class="card-body CardBody">
                        <h5 class="card-title">Pan-Asian Restraurants</h5>
                        <h6>
                          14 Places{" "}
                          <i
                            class="fa fa-arrow-right Right"
                            aria-hidden="true"
                          ></i>
                        </h6>
                      </div>
                    </div>
                    <div class="card Card2">
                      <div className="image-wrapper">
                        <img
                          src={PIZZA}
                          class="card-img-top card-img-top "
                          alt="..."
                        />
                      </div>
                      <div class="card-body CardBody">
                        <h5 class="card-title">Pizz On My Mind</h5>
                        <h6>
                          9 Places{" "}
                          <i
                            class="fa fa-arrow-right Right"
                            aria-hidden="true"
                          ></i>
                        </h6>
                      </div>
                    </div>

                    <div class="card Card2">
                      <img
                        src={TABLE}
                        class="card-img-top Table card-img-top"
                        alt="..."
                      />

                      <div class="card-body CardBody">
                        <h5 class="card-title">Picturesque Cafes</h5>
                        <h6>
                          7 Places{" "}
                          <i
                            class="fa fa-arrow-right Right"
                            aria-hidden="true"
                          ></i>
                        </h6>
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
      <div className="container Gold ">
        <button type="button" class="btn btn-outline-secondary Goldbtn">
          <img style={{ height: "22px" }} src={TOGLE}></img>&nbsp;Filters
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-outline-secondary Goldbtn">
          <img style={{ height: "22px" }} src={GOLD}></img>&nbsp;Gold
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-outline-secondary Goldbtn">
          Rating: 4.0+
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-outline-secondary Goldbtn">
          Outdoor Seating
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-outline-secondary Goldbtn">
          Open Now
        </button>
      </div>
      <div className="container">
        <img src={POSTR} className=" Goldposter"></img>
      </div>
      <div className="container Trendrestro">
        <h3>Trending dining restaurants in Ahmedabad</h3>
      </div>
      <div className="container Dinning">
        <div class="card Carddinning1 Card2">
          <img src={DINE1} class="card-img-top Dine2" alt="..." />
          <div class="card-body ">
            <div class="card-title Titledinning">
              <p className="Mahamahal"> Mahamahal</p>
              <p className="New">
                New<i class="fa fa-star Star" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardText2">
              Punjabi,North Indian,Guj....
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>1,000 for Two
              </p>
            </p>
            <p class="card-text CardText3">Thaltej,Ahmedabad</p>
            <p class="card-text CardText2">
              <p style={{ color: "#C95A62" }}>Opens At 7pm</p>
              <p>6 km</p>
            </p>
          </div>
        </div>
        <div class="card Carddinning1 Card2 Card2">
          <img src={DINE2} class="card-img-top Dine2" alt="..." />
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
        <div class="card Carddinning1 Card2 Card2">
          <img src={DINE3} class="card-img-top Dine3" alt="..." />
          <div class="card-img-overlay">
            <h5 class="card-title Textinner">Promoted</h5>
            <p class="card-text Imginner">
              <big>
                <img className="GOLD1" src={GOLD}></img> Flat 10% Off
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
      <div className="container Dinning">
        <div class="card Carddinning1 Card2 Card2">
          <img src={DINE4} class="card-img-top" alt="..." />
          <div class="card-img-overlay">
            <h5 class="card-title Textinner">Promoted</h5>
            <p class="card-text Imginner">
              <big>
                <img className="GOLD1" src={GOLD}></img> Flat 10% Off
              </big>
            </p>
          </div>
          <div class="card-body ">
            <div class="card-title Titledinning">
              <p className="Lithosphere">Food Stories By The Westend</p>
              <p className="New">
                4.2<i class="fa fa-star Star" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardText2">
              Tex-Mex,North Indian,Ita..
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>950 for Two
              </p>
            </p>
            <p class="card-text CardText3">Thaltej,Ahmedabad</p>
            <p class="card-text CardText2">
              <p style={{ color: "#C95A62" }}>Opens in 2 minutes</p>
              <p>2 km</p>
            </p>
          </div>
        </div>
        <div class="card Carddinning1 Card2 Card2">
          <img src={DINE5} class="card-img-top Dine2" alt="..." />
          <div class="card-img-overlay">
            <h5 class="card-title Textinner">Promoted</h5>
            <p class="card-text Imginner">
              <big>
                <img className="GOLD1" src={GOLD}></img> Flat 15% Off
              </big>
            </p>
          </div>
          <div class="card-body ">
            <div class="card-title Titledinning">
              <p className="Mahamahal">Unlocked</p>
              <p className="New">
                4.1<i class="fa fa-star Star" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardText2">
              Cafe,Fast Food,Nor..
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>950 for Two
              </p>
            </p>
            <p class="card-text CardText3">Navrangpura,Ahmedabad</p>
            <p class="card-text CardText2">
              <p style={{ color: "#C95A62" }}>Opens at 11:30am</p>
              <p>1.4 km</p>
            </p>
          </div>
        </div>
        <div class="card Carddinning1 Card2 Card2">
          <img src={DINE6} class="card-img-top Dine3" alt="..." />
          <div class="card-img-overlay">
            <p class="card-text Imginner">
              <big>
                <img className="GOLD1" src={GOLD}></img> Flat 15% Off
              </big>
            </p>
          </div>
          <div class="card-body ">
            <div class="card-title Titledinning">
              <p className="Lithosphere">Three Quarter Indian</p>
              <p className="New">
                4.2<i class="fa fa-star Star" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardText2">
              Continental,North Indian,Pun..
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>1,200 for Two
              </p>
            </p>
            <p class="card-text CardText3">Setelite,Ahmedabad</p>
            <p class="card-text CardText2">
              <p style={{ color: "#C95A62" }}>Opens At 12noon</p>
              <p>4.5 km</p>
            </p>
          </div>
        </div>
      </div>
      <div className="container Dinning">
        <div class="card Carddinning1 Card2">
          <img src={DINE7} class="card-img-top" alt="..." />
          <div class="card-img-overlay">
            <p class="card-text Imginner">
              <big>
                <img className="GOLD1" src={GOLD}></img> Flat 10% Off
              </big>
            </p>
          </div>
          <div class="card-body ">
            <div class="card-title Titledinning">
              <p className="Lithosphere">UKIYO-Live In The Moment</p>
              <p className="New">
                4.6<i class="fa fa-star Star" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardText2">
              Continental,North Indian,...
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>1,100 for Two
              </p>
            </p>
            <p class="card-text CardText4">
              Prahlad Nagar,Ahmedabad
              <p>-7.3 km</p>
            </p>
          </div>
        </div>
        <div class="card Carddinning1 Card2">
          <img src={DINE8} class="card-img-top Dine2" alt="..." />
          <div class="card-img-overlay">
            <p class="card-text Imginner">
              <big>
                <img className="GOLD1" src={GOLD}></img> Flat 25% Off
              </big>
            </p>
          </div>
          <div class="card-body ">
            <div class="card-title Titledinning">
              <p className="Mahamahal">Caffe Allora</p>
              <p className="New">
                4.3<i class="fa fa-star Star" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardText2">
              Pizza,Italian,Pas..
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>1,700 for Two
              </p>
            </p>
            <p class="card-text CardText4">
              Thaltej,Ahmedabad
              <p>4.9 km</p>
            </p>
          </div>
        </div>
        <div class="card Carddinning1 Card2">
          <img src={DINE9} class="card-img-top Dine3" alt="..." />
          <div class="card-img-overlay">
            <p class="card-text Imginner">
              <big>
                <img className="GOLD1" src={GOLD}></img> Flat 15% Off
              </big>
            </p>
          </div>
          <div class="card-body ">
            <div class="card-title Titledinning">
              <p className="Lithosphere">Mrs Mage-Hyatt Ahmedabad</p>
              <p className="New">
                4.6<i class="fa fa-star Star" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardText2">
              Continental,Maxica..
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>3,000 for Two
              </p>
            </p>
            <p class="card-text CardText4">
              Vastrapur,Ahmedabad
              <p>3.7 km</p>
            </p>
          </div>
        </div>
      </div>
      <div className="container Dinning">
        <div class="card Carddinning1 Card2">
          <img src={DINE10} class="card-img-top Dine2" alt="..." />
          <div class="card-body ">
            <div class="card-title Titledinning">
              <p className="Mahamahal">Mocha</p>
              <p className="New">
                4.4<i class="fa fa-star Star" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardText2">
              Italian,Pizza,Mo..
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>1,800 for Two
              </p>
            </p>
            <p class="card-text CardText4">
              Bodakdev,Ahmedabad
              <p>5.8 km</p>
            </p>
          </div>
        </div>
        <div class="card Carddinning1 Card2">
          <img src={DINE11} class="card-img-top Dine2" alt="..." />
          <div class="card-body ">
            <div class="card-title Titledinning">
              <p className="Massala">Roastery Cultur</p>
              <p className="New">
                4.5<i class="fa fa-star Star" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardText2">
              Cafe,Fast Food,C..
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>500 for Two
              </p>
            </p>
            <p class="card-text CardText4">
              Bodakdev,Ahmedabad
              <p>4.7 km</p>
            </p>
          </div>
        </div>
        <div class="card Carddinning1 Card2">
          <img src={DINE12} class="card-img-top Dine2" alt="..." />
          <div class="card-body ">
            <div class="card-title Titledinning">
              <p className="Lithosphere">Little French House</p>
              <p className="New">
                4.0<i class="fa fa-star Star" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardText2">
              Cafe,Beverages,..
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>1,200 for Two
              </p>
            </p>
            <p class="card-text CardText4">
              Navrangpura,Ahmedabad
              <p>619 m</p>
            </p>
          </div>
        </div>
      </div>
      <div className="container Dinning">
        <div class="card Carddinning1 Card2">
          <img src={DINE13} class="card-img-top Dine2" alt="..." />
          <div class="card-img-overlay">
            <p class="card-text Imginner">
              <big>
                <img className="GOLD1" src={GOLD}></img> Flat 10% Off
              </big>
            </p>
          </div>
          <div class="card-body ">
            <div class="card-title Titledinning">
              <p className="Lithosphere">Cafe Coffee Dose</p>
              <p className="New">
                3.9<i class="fa fa-star Star" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardText2">
              Fast Food,Shake,..
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>600 for Two
              </p>
            </p>
            <p class="card-text CardText4">
              Gota,Ahmedabad
              <p>8.4 km</p>
            </p>
          </div>
        </div>
        <div class="card Carddinning1 Card2">
          <img src={DINE14} class="card-img-top Dine2" alt="..." />
          <div class="card-img-overlay">
            <p class="card-text Imginner">
              <big>
                <img className="GOLD1" src={GOLD}></img> Flat 10% Off
              </big>
            </p>
          </div>
          <div class="card-body ">
            <div class="card-title Titledinning">
              <p className="Lithosphere">Work On Fire</p>
              <p className="New">
                4.1<i class="fa fa-star Star" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardText2">
              Chinese,Asian,...
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>1,000 for Two
              </p>
            </p>
            <p class="card-text CardText4">
              Bodakdev,Ahmedabad
              <p>6.9 km</p>
            </p>
          </div>
        </div>
        <div class="card Carddinning1 Card2">
          <img src={DINE15} class="card-img-top Dine2" alt="..." />
          <div class="card-img-overlay">
            <p class="card-text Imginner">
              <big>
                <img className="GOLD1" src={GOLD}></img> Flat 10% Off
              </big>
            </p>
          </div>
          <div class="card-body ">
            <div class="card-title Titledinning">
              <p className="Mahamahal">Arbre</p>
              <p className="New">
                3.7<i class="fa fa-star Star" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardText2">
              Pizza,Pasta,..
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>1,000 for Two
              </p>
            </p>
            <p class="card-text CardText4">
              Setelite,Ahmedabad
              <p>8.3 Km</p>
            </p>
          </div>
        </div>
      </div>
      <div className="container Dinning">
        <div class="card Carddinning1 Card2">
          <img src={DINE16} class="card-img-top" alt="..." />
          <div class="card-img-overlay">
            <p class="card-text Imginner">
              <big>
                <img className="GOLD1" src={GOLD}></img> Flat 10% Off
              </big>
            </p>
          </div>
          <div class="card-body ">
            <div class="card-title Titledinning">
              <p className="Lithosphere">Z27 Coffee Bar</p>
              <p className="New">
                3.6<i class="fa fa-star Star" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardText2">
              Cafe,Beverages,..
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>800 for Two
              </p>
            </p>
            <p class="card-text CardText3">Thaltej,Ahmedabad</p>
            <p class="card-text CardText2">
              <p style={{ color: "#C95A62" }}>Opens at 4pm</p>
              <p>8.4 km</p>
            </p>
          </div>
        </div>
        <div class="card Carddinning1 Card2">
          <img src={DINE17} class="card-img-top Dine2" alt="..." />
          <div class="card-img-overlay">
            <p class="card-text Imginner">
              <big>
                <img className="GOLD1" src={GOLD}></img> Flat 15% Off
              </big>
            </p>
          </div>
          <div class="card-body ">
            <div class="card-title Titledinning">
              <p className="Massala">Vintage Vibes</p>
              <p className="New">
                3.9<i class="fa fa-star Star" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardText2">
              North Indian,Asian..
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>1,600 for Two
              </p>
            </p>
            <p class="card-text CardText3">Thaltej,Ahmedabad</p>
            <p class="card-text CardText2">
              <p style={{ color: "#C95A62" }}>Opens at 7pm</p>
              <p>7.1 km</p>
            </p>
          </div>
        </div>
        <div class="card Carddinning1 Card2">
          <img src={DINE18} class="card-img-top Dine3" alt="..." />
          <div class="card-img-overlay">
            <p class="card-text Imginner">
              <big>
                <img className="GOLD1" src={GOLD}></img> Flat 10% Off
              </big>
            </p>
          </div>
          <div class="card-body ">
            <div class="card-title Titledinning">
              <p className="Massala">Agashiye</p>
              <p className="New">
                4.5<i class="fa fa-star Star" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardText2">
              Gujrati
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>2,500 for Two
              </p>
            </p>
            <p class="card-text CardText3">Lal Darwaja,Ahmedabad</p>
            <p class="card-text CardText2">
              <p style={{ color: "#C95A62" }}>Closes in 7 minutes</p>
              <p>2.3 km</p>
            </p>
          </div>
        </div>
      </div>
      <div className="container Dinning">
        <div class="card Carddinning1 Card2">
          <img src={DINE19} class="card-img-top Dine2" alt="..." />
          <div class="card-img-overlay">
            <h5 class="card-title Textinner">Promoted</h5>
          </div>
          <div class="card-body ">
            <div class="card-title Titledinning">
              <p className="Lithosphere">Dakshin Bhijnam</p>
              <p className="New">
                New<i class="fa fa-star Star" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardText2">
              South Indian,B..
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>600 for Two
              </p>
            </p>
            <p class="card-text CardText4">
              Sola,Ahmedabad
              <p>6 km</p>
            </p>
          </div>
        </div>
        <div class="card Carddinning1 Card2">
          <img src={DINE20} class="card-img-top Dine2" alt="..." />
          <div class="card-img-overlay">
            <h5 class="card-title Textinner">Promoted</h5>
            <p class="card-text Imginner">
              <big>
                <img className="GOLD1" src={GOLD}></img> Flat 20% Off
              </big>
            </p>
          </div>
          <div class="card-body ">
            <div class="card-title Titledinning">
              <p className="Lithosphere">Pink Palette</p>
              <p className="New">
                4.4<i class="fa fa-star Star" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardText2">
              North Indian,Chinese,..
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>1,400 for Two
              </p>
            </p>
            <p class="card-text CardText4">
              Bodakdev,Ahmedabad
              <p>6.4 km</p>
            </p>
          </div>
        </div>
        <div class="card Carddinning1 Card2">
          <img src={DINE21} class="card-img-top Dine2" alt="..." />
          <div class="card-img-overlay">
            <p class="card-text Imginner">
              <big>
                <img className="GOLD1" src={GOLD}></img> Flat 10% Off
              </big>
            </p>
          </div>
          <div class="card-body ">
            <div class="card-title Titledinning">
              <p className="Mahamahal">Level 1</p>
              <p className="New">
                New<i class="fa fa-star Star" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardText2">
              Italian,Asian,..
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>1,000 for Two
              </p>
            </p>
            <p class="card-text CardText4">Thaltej,Ahmedabad</p>
            <p class="card-text CardText2">
              <p style={{ color: "#C95A62" }}>Opens at 6:30pm</p>
              <p>7.2 km</p>
            </p>
          </div>
        </div>
      </div>
      <div className="container Dinning">
        <div class="card Carddinning1 Card2">
          <img src={DINE22} class="card-img-top Dine2" alt="..." />
          <div class="card-body ">
            <div class="card-title Titledinning">
              <p className="Lithosphere">Sip Of Hope</p>
              <p className="New">
                New<i class="fa fa-star Star" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardText2">
              Cafe,Mexican,C..
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>800 for Two
              </p>
            </p>
            <p class="card-text CardText4">
              Bodakdev,Ahmedabad
              <p>4.9 km</p>
            </p>
          </div>
        </div>
        <div class="card Carddinning1 Card2">
          <img src={DINE23} class="card-img-top Dine2" alt="..." />

          <div class="card-body ">
            <div class="card-title Titledinning">
              <p className="Mahamahal">Fiesta</p>
              <p className="New">
                New<i class="fa fa-star Star" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardText2">
              Momos,Fast Food,N..
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>1,400 for Two
              </p>
            </p>
            <p class="card-text CardText4">
              Bopal,Ahmedabad
              <p>9.9 km</p>
            </p>
          </div>
        </div>
        <div class="card Carddinning1 Card2">
          <img src={DINE24} class="card-img-top Dine2" alt="..." />

          <div class="card-body ">
            <div class="card-title Titledinning">
              <p className="Lithosphere">Mexicano By The Bay</p>
              <p className="New">
                3.3<i class="fa fa-star Star" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardText2">
              Cafe,Mexican,I..
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>950 for Two
              </p>
            </p>
            <p class="card-text CardText4">
              Ashram Road,Ahmedabad
              <p>1.7 Km</p>
            </p>
          </div>
        </div>
      </div>
      <div className="container Dinning">
        <div class="card Carddinning1 Card2">
          <img src={DINE25} class="card-img-top" alt="..." />

          <div class="card-body ">
            <div class="card-title Titledinning">
              <p className="Lithosphere">The Golden BBQ</p>
              <p className="New">
                3.9<i class="fa fa-star Star" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardText2">
              BBQ,North Indian
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>1000 for Two
              </p>
            </p>
            <p class="card-text CardText3">Vastrapur,Ahmedabad</p>
            <p class="card-text CardText2">
              <p style={{ color: "#C95A62" }}>Opens at 3:15pm</p>
              <p>4.1 km</p>
            </p>
          </div>
        </div>
        <div class="card Carddinning1 Card2">
          <img src={DINE26} class="card-img-top Dine2" alt="..." />

          <div class="card-body ">
            <div class="card-title Titledinning">
              <p className="Massala">Shozo Bakers</p>
              <p className="New">
                3.9<i class="fa fa-star Star" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardText2">
              Bakery,Cafe,San..
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>500 for Two
              </p>
            </p>
            <p class="card-text CardText4">
              Bodakdev,Ahmedabad
              <p>5.8 km</p>
            </p>
          </div>
        </div>
        <div class="card Carddinning1 Card2">
          <img src={DINE27} class="card-img-top Dine3" alt="..." />

          <div class="card-body ">
            <div class="card-title Titledinning">
              <p className="Lithosphere">Alpine Restaurant</p>
              <p className="New">
                3.9<i class="fa fa-star Star" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardText2">
              Chinese,Fast Food
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>700 for Two
              </p>
            </p>
            <p class="card-text CardText3">Ellis Bridge,Ahmedabad</p>
            <p class="card-text CardText2">
              <p style={{ color: "#C95A62" }}>Closes in 27 minutes</p>
              <p>2.6 km</p>
            </p>
          </div>
        </div>
      </div>
      <div className="container Dinning">
        <div class="card Carddinning1 Card2">
          <img src={DINE28} class="card-img-top Dine2" alt="..." />

          <div class="card-body ">
            <div class="card-title Titledinning">
              <p className="Massala">May Flower </p>
              <p className="New">
                4.0<i class="fa fa-star Star" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardText2">
              North Indian,Chinese
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>1,000 for Two
              </p>
            </p>
            <p class="card-text CardText4">
              Ellis Bridge,Ahmedabad
              <p>2.3 km</p>
            </p>
          </div>
        </div>
        <div class="card Carddinning1 Card2">
          <img src={DINE29} class="card-img-top Dine4" alt="..." />

          <div class="card-body ">
            <div class="card-title Titledinning">
              <p className="Mahamahal">Numeron</p>
              <p className="New">
                3.8<i class="fa fa-star Star" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardText2">
              Italian,Pizza,...
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>850 for Two
              </p>
            </p>
            <p class="card-text CardText3">Bodakdev,Ahmedabad</p>
            <p class="card-text CardText2">
              <p style={{ color: "#C95A62" }}>Closes in 27 minutes</p>
              <p>6.7 km</p>
            </p>
          </div>
        </div>

        <div class="card Carddinning1 Card2">
          <img src={DINE30} class="card-img-top Dine3" alt="..." />

          <div class="card-body ">
            <div class="card-title Titledinning">
              <p className="Lithosphere">Southern India</p>
              <p className="New">
                4.0<i class="fa fa-star Star" aria-hidden="true"></i>
              </p>
            </div>
            <p class="card-text CardText2">
              South Indian
              <p>
                <i class="fa fa-inr Inr" aria-hidden="true"></i>500 for Two
              </p>
            </p>
            <p class="card-text CardText3">Sola,Ahmedabad</p>
            <p class="card-text CardText2">
              <p style={{ color: "#C95A62" }}>Closes in 27 minutes</p>
              <p>6.6 km</p>
            </p>
          </div>
        </div>
      </div>
      <a href="#Collections">
        <button id="Sortbtn">^</button>
      </a>
      <Footer/>
    </div>
  );
}
