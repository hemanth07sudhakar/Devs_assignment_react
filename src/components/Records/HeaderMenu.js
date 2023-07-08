import React from "react";
import Navbar from "./Navbar";

const HeaderMenu = (props) => {
  return (
    <header>
      <div className="nav-area">
        <a href="/" className="logo">
          Logo
        </a>
        <Navbar />
      </div>
    </header>
  );
};

export default HeaderMenu;
