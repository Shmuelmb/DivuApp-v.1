import React, { useState, useEffect } from "react";
import "./StartShift.css";

//HOOK Always on top of component
const StartShift = (time) => {
  const [startShift, setStartShift] = useState("");

  // use state is condition for true fase

  function giveStartShift() {
    setStartShift(new Date().toLocaleTimeString());
  }

  //js logic
  return (
    <div className="start-shift">
      <button onClick={giveStartShift}>התחל משמרת</button>
      <p>Start time : {startShift}</p>
    </div>
  );
};

export default StartShift;
