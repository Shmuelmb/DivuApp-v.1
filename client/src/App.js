import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import MyReports from "./components/HomePage/HomePageNavPages/MyReports/MyReports";
import LogOut from "./components/HomePage/HomePageNavPages/LogOut/LogOut";
import PmManger from "./components/HomePage/HomePageNavPages/PmManger/PmManger";
import EndShift from "./components/HomePage/HomeBody/EndShift/EndShift";
import StartShift from "./components/HomePage/HomeBody/StartShift/StartShift";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserLoginPage from "./components/UserLoginPage/UserLoginPage";
import Footer from "./components/UserLoginPage/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Routes>
          <Route path="/" element={<UserLoginPage />} />
          <Route path="/homepage:id" element={<Footer />} />
          <Route path="/myreports" element={<MyReports />}></Route>
          <Route path="/logout" element={<LogOut />}></Route>
          <Route path="/pmmanager" element={<PmManger />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
