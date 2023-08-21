import React from "react";
import { Link } from "react-router-dom";

function MainButton({
  text,
  width = "150px",
  height = "45px",
  fontSize = "20px",
  backgroundColor = "var(--color-secondary)",
  borderRadius = "10px",
  color = "black",
  link = "/quote"
}) {
  let buttonStyle = {
    width: width,
    height: height,
    borderRadius,
    border: "none",
    fontSize,
    backgroundColor,
    cursor: "pointer",
    color
  };

  // Add a media query for smaller screens
  if (window.innerWidth <= 768 && width !== "100%") {
    buttonStyle.width = `${parseInt(width) * 0.7}px`;
    buttonStyle.height = `${parseInt(height) * 0.85}px`;
    buttonStyle.fontSize = `${parseInt(fontSize) * 0.8}px`;
  }

  return (
    <Link to={link}>
      <button style={buttonStyle}>{text}</button>
    </Link>
  );
}

export default MainButton;
