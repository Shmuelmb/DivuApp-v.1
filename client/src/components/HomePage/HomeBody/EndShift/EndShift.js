import React, { useState, useEffect } from "react";
import "./EndShift.css";

const EndShift = () => {
  const [endShift, setEndShift] = useState("");
  const [disable, setDisable] = useState(false);

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  function giveEndShift() {
    setEndShift(new Date().toLocaleTimeString());
    const object = {
      ID: "ID HERE",
      StartShift: { endShift, date },
    };
    console.log(object);
    setDisable(true);
  }

  //js logic
  return (
    <div className="end-shift">
      <button disabled={disable} onClick={giveEndShift}>
        סיים משמרת
      </button>
      <p>End time :{endShift}</p>
    </div>
  );
};

export default EndShift;
