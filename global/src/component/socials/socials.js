import React from "react";
import "./socials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Socials({
  fontSize = "2rem",
  gap = "5px",
  justifyContent = "center",
}) {
  let socialIcon = {
    color: "var(--color-secondary)",
    fontSize,
    display: "flex",
    gap,
    justifyContent,
  };
  return (
    <div style={socialIcon}>
      <FontAwesomeIcon icon={faSquareFacebook} style={socialIcon} />
      <FontAwesomeIcon icon={faSquareXTwitter} style={socialIcon} />
      <FontAwesomeIcon icon={faSquareInstagram} style={socialIcon} />
    </div>
  );
}

export default Socials;
