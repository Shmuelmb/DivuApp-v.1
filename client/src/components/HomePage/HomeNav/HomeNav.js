import React from "react";
import "./HomeNav.css";
import { useNavigate } from "react-router-dom";
import MyContext from "../../../MyContext";
import { useContext } from "react";
import {useState, useEffect} from 'react'



const HomeNav = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const { userInput, setUserInput } = useContext(MyContext);
  console.log(userInput);



  const navigate = useNavigate();


  const toggleNav = () => {
    let menu = "";

  if (!toggleMenu) {
    setToggleMenu(true);
    menu = "open";
    console.log(menu)
  } else {
    setToggleMenu(false);
    menu = "close"
    console.log(menu)

  }
  }
  

  return (



   <div className="home-nav">
             <p>welcome back {userInput}</p>
             <nav>
             {(!toggleMenu && screenWidth > 500) && (
     <ul className="nav-page-list">

     <li className="nav-page" onClick={() => navigate("/MyReports")}>My Reports</li>
     <li className="nav-page" onClick={() => navigate("/PmManager")}>PM Manager</li>
     <li className="nav-page" onClick={() => navigate("/LogOut")}>Log Out</li>
     
     </ul>
      )}
    
      <button onClick={toggleNav} className="btn">OPEN MENU</button>

    </nav>
    </div>
  );
};

   

export default HomeNav;
