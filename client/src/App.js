import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLoginPage from "./components/UserLoginPage/UserLoginPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
