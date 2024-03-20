import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Nav from "./Nav";
import Nav2 from "./Nav2";

export default function Mianroutes() {
  return (
    <div>
      <Nav />
      <Nav2 />
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}
