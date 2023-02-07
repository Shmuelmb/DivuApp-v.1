import React from "react";
import "./HomeNav.css";
import { useNavigate } from "react-router-dom";

const HomeNav = () => {
  const navigate = useNavigate();
  return (
    <div className="home-nav">
      <p>welcome back `WORKER`</p>
      <button onClick={() => navigate("/MyReports")}>My Reports</button>
      <button onClick={() => navigate("/PmManager")}>PM Manager</button>
      <button onClick={() => navigate("/LogOut")}>Log Out</button>
    </div>
  );
};

export default HomeNav;
