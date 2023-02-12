import React from "react";
import { useNavigate } from "react-router-dom";

import "./UserLoginNav.css";
const UserLoginNav = () => {
  const navigate = useNavigate("");
  return (
    <nav className="user-login-nav">
      <h1>DivuApp</h1>
      <p className="admin-btn" onClick={() => navigate("/adminpage")}>
        Login as administrator
      </p>
    </nav>
  );
};

export default UserLoginNav;
