import React from "react";
import { Routes, Route } from "react-router-dom";
import Boards from "./components/boards/Boards";
import Home from "./components/home/Home";

const Content = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/boards" element={<Boards />}></Route>
      </Routes>
    </div>
  );
};

export default Content;
