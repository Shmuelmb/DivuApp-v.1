import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLoginPage from "./components/UserLoginPage/UserLoginPage";
import Footer from "./components/UserLoginPage/Footer/Footer";
import HomePage from "./components/HomePage/HomePage.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLoginPage />} />
        <Route path="homepage" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
