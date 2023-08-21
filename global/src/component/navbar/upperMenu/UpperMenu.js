import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./upperMenu.css";
import Logo from "../../logo/logo";
import LowerMenu from "../lowerMenu/LowerMenu";
import Socials from "../../socials/socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function UpperMenu() {
  const [handleHamburger, setHandleHamburger] = useState(false);
  return (
    <div className="upperMenu">
      <div className="upperMenuChild">
        <div className="upperMenuLogo">
          <Logo />
        </div>
        <div className="upperMenuDetails">
          <div className="navbarLeft">
            <div className="navbarLogo">
              <Logo />
            </div>
            <div className="navbarDetails">
              <div>
                <FontAwesomeIcon className="icons" icon={faLocationDot} />
                3-9 Hyde Road Manchester,UK
              </div>
              <div>
                <FontAwesomeIcon className="icons" icon={faPhone} />
                01 616 690 880
              </div>
              <div>
                <FontAwesomeIcon className="icons" icon={faEnvelope} />
                info@gmail.com
              </div>
            </div>
          </div>
          <div className="navBarSocial">
            <Link to="https:/facebook.com">
              <FontAwesomeIcon icon={faFacebook} className="icons" />
            </Link>
            <Link to="https:/twitter.com">
              <FontAwesomeIcon icon={faXTwitter} className="icons" />
            </Link>
            <Link to="https:/instagram.com">
              <FontAwesomeIcon icon={faInstagram} className="icons" />
            </Link>
          </div>
        </div>

        <div
          className="hamburger"
          onClick={() => setHandleHamburger(!handleHamburger)}
        >
          {/* <Logo /> */}
          <div className="hamburgerLine"></div>
          <div className="hamburgerLine"></div>
          <div className="hamburgerLine"></div>
        </div>
      </div>

      {handleHamburger && (
        <div className="mobileMenu">
          <div className="mobileNav" onClick={()=>setHandleHamburger(false)}>
            <LowerMenu />
          </div>
          <div className="mobileSocial">
            <h3>Follow Us</h3>
            <Socials />
          </div>
        </div>
      )}
    </div>
  );
}

export default UpperMenu;
