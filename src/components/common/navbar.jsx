// React Imports
import React from "react";
import { Outlet, Link } from "react-router-dom";
// My Imports

const Navbar = () => {
  return (
    <>
      <h1 className="shopTitle">Dungeons & Markets</h1>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/loginPage">Login</Link>
          </li>
          <li>
            <Link to="/registerPage">Register</Link>
          </li>
          <li>
            <Link to="/productPage">Products</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
