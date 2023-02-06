import React from "react";
import HomePageBody from "../HomePageBody/HomePageBody";
import HomePageNav from "../HomePageNav/HomePageNav";
import Clock from "../Clock/Clock.js";
import StartShift from "../HomePageButtons/StartShift.js"
import EndShift from "../HomePageButtons/EndShift";

import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homePage">
            <HomePageBody />

      <HomePageNav />
      <Clock />
    <StartShift />
    <EndShift />
    

    </div>
  );
};

export default HomePage;  
