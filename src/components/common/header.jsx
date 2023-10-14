// React Imports
import React from "react";
// My Imports
import Navbar from "./navbar";

const Header = () => {
  return (
    <div className="header">
      <h1 className="shopTitle">Dungeons & Markets</h1>
      <nav>
        <Navbar />
      </nav>
    </div>
  );
};

export default Header;
