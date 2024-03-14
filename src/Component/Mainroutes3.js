import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";

export default function Mainroutes3() {
  return (
    <div>
      <Routes>
        <Route path="/Sin1" element={<Login />}></Route>
        <Route path="/log1" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}
