import React from "react";
import logo from "../../assets/logo/logo.png";
import "./logo.css";

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="company logo" />
    </div>
  );
}

export default Logo;
