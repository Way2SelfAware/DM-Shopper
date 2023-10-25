// React Imports
import React from "react";
import { Outlet, Link } from "react-router-dom";
// My Imports
import Footer from "./footer";

const Navbar = () => {
  return (
    <>
      <div className="top-nav-title">
        <h1 className="shopTitle">Dungeons & Markets</h1>
        <nav className="navbar">
          <div className="nav-links">
            <div className="home-link">
              <Link to="/">Home</Link>
            </div>
            <div className="login-link">
              <Link to="/loginPage">Login</Link>
            </div>
            <div className="register-link">
              <Link to="/registerPage">Register</Link>
            </div>
            <div className="product-link">
              <Link to="/productPage">Products</Link>
            </div>
          </div>
        </nav>
      </div>

      <Outlet />

      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
};

export default Navbar;
