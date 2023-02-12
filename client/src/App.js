import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLoginPage from "./components/UserLoginPage/UserLoginPage";
import Footer from "./components/UserLoginPage/Footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Routes>
          <Route path="/" element={<UserLoginPage />} />
          <Route path="/homepage:id" element={<Footer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
