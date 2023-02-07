import React from "react";
import "./HomeDate.css";

const HomeDate = () => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const dayOfWeekDigit = new Date().getDay();
  const dayOfWeekName = new Date().toLocaleString("default", {
    weekday: "long",
  });

  return (
    <div className="home-date">
      <h1>Current date is : {date}</h1>
      <h1>Current day is : {dayOfWeekName}</h1>
    </div>
  );
};

export default HomeDate;
