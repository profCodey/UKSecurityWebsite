import React from "react";
import { Link } from "react-router-dom";
import "./lowerMenu.css";

const LowerMenu = () => {
  return (
    <nav className="navbar"
      // style={{ display: "none" }}
    >
      <div className="lowerMenuNav">
        <ul className="navabar-li-parent">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/services">
              Services
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/careers">
              Careers
            </Link>
          </li>
          {/* <li>
            <Link className="nav-link" to="/quote">
              Quotes
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default LowerMenu;
