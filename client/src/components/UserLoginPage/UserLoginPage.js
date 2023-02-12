import React from "react";
import UserLoginBody from "./UserLoginBody/UserLoginBody";
import "./UserLoginPage.css";
import Footer from "./Footer/Footer";

const UserLoginPage = () => {
  return (
    <div className="user-login-page">
      <UserLoginBody />
      <Footer />
    </div>
  );
};

export default UserLoginPage;
