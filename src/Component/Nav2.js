// import React from "react";
// import { NavLink } from "react-router-dom";
// import DINNING from "../assets/product/Dinningout.avif";
// import DELIVERY from "../assets/product/Delivery.webp";
// import NIGHTLIFE from "../assets/product/Nightlife.webp";
// import "./Nav2.css";
// export default function Nav2() {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container">
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <NavLink className="Navbarlink1" to="/dinning">
//                   <img className=" DinningOutImage" src={DINNING}></img>
//                   Dinning Out
//                 </NavLink>
//               </li>
//               <li class="nav-item">
//                 <NavLink className="Navbarlink1" to="/Delivery">
//                   <img className=" DeliveryImage" src={DELIVERY}></img>
//                   Delivery
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="Navbarlink1" to="">
//                   <img className=" DinningOutImage " src={NIGHTLIFE}></img>
//                   Nightlife
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }
import React from "react";
import { NavLink } from "react-router-dom";
import DINNING from "../assets/product/Dinningout.avif";
import DELIVERY from "../assets/product/Delivery.webp";
import NIGHTLIFE from "../assets/product/Nightlife.webp";
import "./Nav2.css";

export default function Nav2() {
  return (
    <div>
      <nav className="navbar navbar-expand bg-body-tertiary">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="Navbarlink1" to="/dinning">
                  <img
                    className=" DinningOutImage"
                    src={DINNING}
                    alt="Dinning Out"
                  ></img>
                  Dinning Out
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="Navbarlink1" to="/Delivery">
                  <img
                    className=" DeliveryImage"
                    src={DELIVERY}
                    alt="Delivery"
                  ></img>
                  Delivery
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="Navbarlink1" to="">
                  <img
                    className=" DinningOutImage "
                    src={NIGHTLIFE}
                    alt="Nightlife"
                  ></img>
                  Nightlife
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
