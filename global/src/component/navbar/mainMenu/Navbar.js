import React from "react";
import UpperMenu from "../upperMenu/UpperMenu";
import LowerMenu from "../lowerMenu/LowerMenu";

function Navbar() {
  return (
    <div className="menuBar">
      <UpperMenu />
      <div className="hidden lg:block">
        <LowerMenu />
      </div>
    </div>
  );
}

export default Navbar;
