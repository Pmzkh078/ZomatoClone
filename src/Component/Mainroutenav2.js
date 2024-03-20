import React from "react";
import { Route, Routes } from "react-router-dom";

import Dinningout from "./Dinningout";
import Delivery from "./Delivery";
import Nightout from "./Nightout";

export default function () {
  return (
    <div>
      <Routes>
        <Route path="/dinning" element={<Dinningout />}></Route>
        <Route path="/delivery" element={<Delivery />}></Route>
        <Route path="/nightout" element={<Nightout />}></Route>
      </Routes>
    </div>
  );
}
