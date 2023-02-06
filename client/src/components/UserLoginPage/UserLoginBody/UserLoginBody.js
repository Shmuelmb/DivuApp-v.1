import React from "react";
import "./UserLoginBody.css";

const UserLoginBody = () => {
  return (
    <div className="user-login-body">
      <h1>DivuApp</h1>
      <h3>Welcome to DivuApp</h3>
      <input type="number" placeholder="Please enter your ID" />
      <div>
        <input className="checkbox" type="checkbox" />
        <label>Remember Me!</label>
      </div>

      <button>Login</button>
      <p>Login as administrator</p>
    </div>
  );
};

export default UserLoginBody;
