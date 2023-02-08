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
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
