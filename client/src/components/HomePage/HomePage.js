import React from "react";
import HomeBody from "./HomeBody/HomeBody";
import HomeNav from "./HomeNav/HomeNav";
import Clock from "./HomeBody/HomeClock/HomeClock.js";
import StartShift from "./HomeBody/StartShift/StartShift.js";
import { Link } from "react-router-dom";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <HomeNav />

      <HomeBody />
    </div>
  );
};

export default HomePage;
