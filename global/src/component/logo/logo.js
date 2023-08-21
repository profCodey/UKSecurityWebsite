import React from "react";
import logo from "../../assets/logo/newLogo.png";
import "./logo.css";

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="company logo" />
    </div>
  );
}

export default Logo;
