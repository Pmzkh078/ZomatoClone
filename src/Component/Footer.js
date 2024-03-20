import React from "react";
import "./Footer.css";
import FOOTER from "../Nightoutasset/FOOTER.webp";
import FOOTER1 from "../Nightoutasset/FOOTER1.webp";
export default function Footer() {
  return (
    <div className="FOOTERMAIN">
      <div
        class="container accordion accordion-flush"
        id="accordionFlushExample"
      >
        <div class=" Accordian">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <h4>Popular cuisines near me</h4>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body AccordianBody">
              Bakery food near me<span className="Dot">.</span>Beverages food
              near me<span className="Dot">.</span>Biryani food near me.Burger
              food near me<span className="Dot">.</span>Cafe food near me
              <span className="Dot">.</span>Chinese food near me
              <span className="Dot">.</span>Coffee food near me
              <span className="Dot">.</span>Continental food near me
              <span className="Dot">.</span>Desserts food near me
              <span className="Dot">.</span>Gujarati food near me
              <span className="Dot">.</span>Ice Cream food near me
              <span className="Dot">.</span>Italian food near me
              <span className="Dot">.</span>Mughlai food near me
              <span className="Dot">.</span>North Indian food near me
              <span className="Dot">.</span>Pasta food near me
              <span className="Dot">.</span>Pizza food near me
              <span className="Dot">.</span>Sandwich food near me
              <span className="Dot">.</span>Shake food near me
              <span className="Dot">.</span>South Indian food near me
              <span className="Dot">.</span>Street food near me
              <span className="Dot">.</span>
            </div>
          </div>
        </div>

        <div class=" Accordian">
          <h2 class="accordion-header ">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <h4>Popular restaurant types near me</h4>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body AccordianBody ">
              Bakeries near meBars near me <span className="Dot">.</span>
              Beverage Shops near me <span className="Dot">.</span>Bhojanalya
              near me <span className="Dot">.</span>Cafés near me{" "}
              <span className="Dot">.</span>Casual Dining near me{" "}
              <span className="Dot">.</span>Dessert Parlors near me{" "}
              <span className="Dot">.</span>Dhabas near me{" "}
              <span className="Dot">.</span>Fine Dining near me{" "}
              <span className="Dot">.</span>Food Courts near me{" "}
              <span className="Dot">.</span>Food Trucks near me{" "}
              <span className="Dot">.</span>Kiosks near meLounges near me{" "}
              <span className="Dot">.</span>Paan Shop near me{" "}
              <span className="Dot">.</span>Quick Bites near me{" "}
              <span className="Dot">.</span>Sweet Shops near me{" "}
              <span className="Dot">.</span>
            </div>
          </div>
        </div>

        <div class=" Accordian">
          <h2 class="accordion-header Accordian1 ">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <h4>Top Restaurant Chains</h4>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body AccordianBody">
              <table cellPadding={15} cellSpacing={5}>
                <tr>
                  <td>Bikanervala</td>
                  <td>Burger King</td>
                  <td>Burger Singh</td>
                  <td>Dunkin' Donuts</td>
                  <td>KFC</td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <div class="accordion-item Accordian">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              <h4>Cities We Deliver To</h4>
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body AccordianBody">
              <table className="table" cellPadding={15}>
                <tr>
                  <td>Delhi NCR</td>
                  <td>Kolkata</td>
                  <td>Mumbai</td>
                  <td>Bengaluru</td>
                  <td>Pune</td>
                </tr>
                <tr>
                  <td>Hyderabad</td>
                  <td>Chennai</td>
                  <td>Lucknow</td>
                  <td>Kochi</td>
                  <td>Jaipur</td>
                </tr>
                <tr>
                  <td>Ahmedabad</td>
                  <td>Chandigarh</td>
                  <td>Goa</td>
                  <td>Indore</td>
                  <td>Gangtok</td>
                </tr>
                <tr>
                  <td>Nashik</td>
                  <td>Ooty</td>
                  <td>Shimla</td>
                  <td>Ludhiana</td>
                  <td>Guwahati</td>
                </tr>
                <tr>
                  <td>Amritsar</td>
                  <td>Kanpur</td>
                  <td>Allahabad</td>
                  <td>Aurangabad</td>
                  <td>Bhopal</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="container text-center">
        <div class="row">
          <div class="col">
            <footer class="pt-4 my-md-5 pt-md-5 border-top">
              <div class="row">
                <div class="col-6 col-md">
                  <h5 className="Footertext">ABOUT ZOMATO</h5>
                  <ul class="list-unstyled text-small">
                    <li className="Footertext">
                      <a class="link-secondary text-decoration-none" href="#">
                        Who We Are
                      </a>
                    </li>
                    <li className="Footertext">
                      <a class="link-secondary text-decoration-none" href="#">
                        Blog
                      </a>
                    </li>
                    <li className="Footertext">
                      <a class="link-secondary text-decoration-none" href="#">
                        Work With Us
                      </a>
                    </li>
                    <li className="Footertext">
                      <a class="link-secondary text-decoration-none" href="#">
                        Investor Relations
                      </a>
                    </li>
                    <li className="Footertext">
                      <a class="link-secondary text-decoration-none" href="#">
                        Report Fraud
                      </a>
                    </li>
                    <li className="Footertext">
                      <a class="link-secondary text-decoration-none" href="#">
                        Press Kit
                      </a>
                    </li>
                    <li className="Footertext">
                      <a class="link-secondary text-decoration-none" href="#">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-6 col-md">
                  <h5 className="Footertext">ZOMAVERSE</h5>
                  <ul class="list-unstyled text-small">
                    <li className="Footertext">
                      <a class="link-secondary text-decoration-none" href="#">
                        Zomato
                      </a>
                    </li>
                    <li className="Footertext">
                      <a class="link-secondary text-decoration-none" href="#">
                        Blinkit
                      </a>
                    </li>
                    <li className="Footertext">
                      <a class="link-secondary text-decoration-none" href="#">
                        Feeding india
                      </a>
                    </li>
                    <li className="Footertext">
                      <a class="link-secondary text-decoration-none" href="#">
                        Hyperpure
                      </a>
                    </li>
                    <li className="Footertext">
                      <a class="link-secondary text-decoration-none" href="#">
                        Zomaland
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-6 col-md">
                  <h5 className="Footertext">FOR RESTAURANTS</h5>
                  <ul class="list-unstyled text-small">
                    <li className="Footertext">
                      <a class="link-secondary text-decoration-none" href="#">
                        Partner With Us
                      </a>
                    </li>
                    <li className="Footertext">
                      <a class="link-secondary text-decoration-none" href="#">
                        Apps For You
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-6 col-md">
                  <h5 className="Footertext">LEARN MORE</h5>
                  <ul class="list-unstyled text-small">
                    <li className="Footertext">
                      <a class="link-secondary text-decoration-none" href="#">
                        Privacy
                      </a>
                    </li>
                    <li className="Footertext">
                      <a class="link-secondary text-decoration-none" href="#">
                        Security
                      </a>
                    </li>
                    <li className="Footertext">
                      <a class="link-secondary text-decoration-none" href="#">
                        Terms
                      </a>
                    </li>
                    <li className="Footertext">
                      <a class="link-secondary text-decoration-none" href="#">
                        Sitemap
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-6 col-md">
                  <h5 className="Footertext">SOCIAL LINKS</h5>
                  <ul class="list-unstyled text-small">
                    <li className="Footertext">
                      <a
                        class="link-secondary text-decoration-none Social"
                        href="#"
                      >
                        <i
                          class="fa fa-linkedin-square Insta"
                          aria-hidden="true"
                        ></i>
                        <i class="fa fa-instagram Insta" aria-hidden="true"></i>
                        <i
                          class="fa fa-twitter-square Insta"
                          aria-hidden="true"
                        ></i>
                        <i class="fa fa-facebook Insta" aria-hidden="true"></i>
                        <i
                          class="fa fa-youtube-play Insta"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li className="Footertext">
                      <a class="link-secondary text-decoration-none" href="#">
                        <img className="Apple" src={FOOTER}></img>
                      </a>
                    </li>
                    <li className="Footertext">
                      <a class="link-secondary text-decoration-none" href="#">
                        <img className="Playstore" src={FOOTER1}></img>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
