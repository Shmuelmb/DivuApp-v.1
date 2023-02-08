import React, { useState } from "react";
import "./UserLoginBody.css";
import { useNavigate } from "react-router-dom";
const UserLoginBody = () => {
  const navigate = useNavigate();
  const [idFiveDigits, setIdFiveDigits] = useState(false);
  return (
    <div className="user-login-body">
      <h1>DivuApp</h1>
      <h3>Welcome to DivuApp</h3>
      <div className="input-id-field">
        <input
          onChange={(e) =>
            e.target.value.length < 5
              ? setIdFiveDigits(false)
              : setIdFiveDigits(true)
          }
          type="number"
          placeholder="Please enter your ID"
        />

        <p className={!idFiveDigits ? "helper-text-input" : "hidden"}>
          The ID must contain at least five digits
        </p>
      </div>
      <div className="remember-me-checkbox">
        <input className="checkbox" type="checkbox" />
        <label>Remember me</label>
      </div>

      <button
        onClick={() => navigate("/homepage")}
        className="button-6"
        disabled={idFiveDigits ? false : true}>
        Login
      </button>
      <p className="admin-btn" onClick={() => navigate("/adminpage")}>
        Login as administrator
      </p>
    </div>
  );
};

export default UserLoginBody;
