import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import MyReports from "./components/HomePage/HomePageNavPages/MyReports/MyReports";
import LogOut from "./components/HomePage/HomePageNavPages/LogOut/LogOut";
import PmManger from "./components/HomePage/HomePageNavPages/PmManger/PmManger";
import EndShift from "./components/HomePage/HomeBody/EndShift/EndShift";
import StartShift from "./components/HomePage/HomeBody/StartShift/StartShift";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLoginPage from "./components/UserLoginPage/UserLoginPage";
import MyContext from "./MyContext.js";
import React, { useState } from "react";

function App() {
  return (
    <BrowserRouter>
      <MyContext.Provider value={{}}>
        <div className="main">
          <Routes>
            <Route path="/" element={<UserLoginPage />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/myreports" element={<MyReports />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="/pmmanager" element={<PmManger />} />
          </Routes>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
