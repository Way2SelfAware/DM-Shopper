// React Imports
import React from "react";
import { Outlet, Link } from "react-router-dom";
// My Imports

const Navbar = () => {
  return (
    <>
      <div className="top-nav-title">
        <h1 className="shopTitle">Dungeons & Markets</h1>
        <nav className="navbar">
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/loginPage">Login</Link>
            <Link to="/registerPage">Register</Link>
            <Link to="/productPage">Products</Link>
          </div>
        </nav>
      </div>

      <Outlet />
    </>
  );
};

export default Navbar;
