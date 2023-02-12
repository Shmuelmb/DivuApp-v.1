import React from "react";
import "./HomeNav.css";
import { useNavigate } from "react-router-dom";
import MyContext from "../../../MyContext";
import { useContext } from "react";

const HomeNav = () => {
  const { userInput, setUserInput } = useContext(MyContext);
  console.log(userInput);

  const navigate = useNavigate();
  return (
    <div className="home-nav">
      <p>welcome back {userInput}</p>
      <button onClick={() => navigate("/MyReports")}>My Reports</button>
      <button onClick={() => navigate("/PmManager")}>PM Manager</button>
      <button onClick={() => navigate("/LogOut")}>Log Out</button>
    </div>
  );
};

export default HomeNav;
