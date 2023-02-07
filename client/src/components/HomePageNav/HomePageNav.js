import React from "react";
import './HomePageNav.css';
import {BrowserRouter , Routes, Route} from "react-router-dom";
import MyReports from "../HomePage/HomePageNavPages/MyReports";




const HomePageNav = () => {
  return <div className="HomePageNav">
        
            <BrowserRouter>
        <Routes>
        <Route path="/MyReports" element={<MyReports />} />
          
         </Routes>
  
     </BrowserRouter>
    <h3>My Reports</h3>
    <h3>PM To Manager</h3>
    
    <h3>Log Out</h3>

   
  </div>;
};

export default HomePageNav;
