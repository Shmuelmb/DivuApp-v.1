import React, { useState, useEffect } from "react";
import "./EndShift.css";

const EndShift = () => {
  const [endShift, setEndShift] = useState("");

  function giveEndShift() {
    setEndShift(new Date().toLocaleTimeString());
  }

  //js logic
  return (
    <div className="end-shift">
      <button onClick={giveEndShift}>סיים משמרת</button>
      <p>End time :{endShift}</p>
    </div>
  );
};

export default EndShift;
