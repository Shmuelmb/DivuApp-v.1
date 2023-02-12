import React, { useState, useEffect } from "react";
import "./StartShift.css";

//HOOK Always on top of component
const StartShift = (isClicked) => {
  const [startShift, setStartShift] = useState("");
  const [workerStartShift, setworkerStartShift] = useState("");

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  // use state is condition for true fase

  function giveStartShift() {
    setStartShift(new Date().toLocaleTimeString());
    const workerStartShift = {
      ID: "ID HERE",
      StartShift: { startShift, date },
    };
    console.log(workerStartShift);
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
