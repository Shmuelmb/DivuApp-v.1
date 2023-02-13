import React, { useState, useEffect } from "react";
import "./StartShift.css";

//HOOK Always on top of component
const StartShift = (isClicked) => {
  const [startShift, setStartShift] = useState("");
  const [endShift, setEndShift] = useState("");

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

  function giveEndShift() {
    setEndShift(new Date().toLocaleTimeString());
    const workerEndShift = {
      ID: "ID HERE",
      EndShift: { endShift, date },
    };
    console.log(workerEndShift);
  }

  //js logic
  return (
    <div className="worker-shifts">
      <div className="start-shift">
        {" "}
        <button onClick={giveStartShift}>התחל משמרת</button>
        <p>Start time : {startShift}</p>
      </div>

      <div className="end-shift">
        <button  onClick={giveEndShift}>סיים משמרת</button>
        <p>End time : {endShift}</p>
      </div>
    </div>
  );
};

export default StartShift;
