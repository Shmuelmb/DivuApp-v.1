import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import MyReports from "./components/HomePage/HomePageNavPages/MyReports/MyReports";
import LogOut from "./components/HomePage/HomePageNavPages/LogOut/LogOut";
import PmManger from "./components/HomePage/HomePageNavPages/PmManger/PmManger";
import EndShift from "./components/HomePage/HomeBody/EndShift/EndShift";
import StartShift from "./components/HomePage/HomeBody/StartShift/StartShift";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/homepage" element={<HomePage />}></Route>
          <Route path="/myreports" element={<MyReports />}></Route>
          <Route path="/logout" element={<LogOut />}></Route>
          <Route path="/pmmanager" element={<PmManger />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
