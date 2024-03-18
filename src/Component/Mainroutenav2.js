import React from "react";
import { Route, Routes } from "react-router-dom";

import Nav2 from "./Nav2";
import Dinningout from "./Dinningout";
import Delivery from "./Delivery";
import Nightout from "./Nightout";
import Footer from "./Footer";

export default function () {
  return (
    <div>
      <Nav2 />

      <Routes>
        <Route path="/dinning" element={<Dinningout />}></Route>
        <Route path="/delivery" element={<Delivery />}></Route>
        <Route path="/nightout" element={<Nightout />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
