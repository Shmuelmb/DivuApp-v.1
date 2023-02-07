import React from "react";
import "./HomeBody.css";
import Clock from "./HomeClock/HomeClock";
import StartShift from "./StartShift/StartShift";
import EndShift from "./EndShift/EndShift";
import HomeDate from "./HomeDate/HomeDate";

const HomeBody = () => {
  return (
    <div className="home-body">
      <HomeDate />
      <Clock />
      <StartShift />
      <EndShift />
    </div>
  );
};

export default HomeBody;
