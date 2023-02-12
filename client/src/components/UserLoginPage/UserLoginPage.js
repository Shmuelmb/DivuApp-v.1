import React from "react";
import UserLoginBody from "./UserLoginBody/UserLoginBody";
import "./UserLoginPage.css";
import Footer from "./Footer/Footer";
import UserLoginNav from "./UserLoginNav/UserLoginNav";

const UserLoginPage = () => {
  return (
    <div className="user-login-page">
      <UserLoginNav />
      <UserLoginBody />
      <Footer />
    </div>
  );
};

export default UserLoginPage;
