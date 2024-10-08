// src/components/Navbar.js
// Todo: figure out why the logo isn't showing (from the public folder)
// fix title color in the nav bar

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Medication Finder</Link>
        <img src="../public/logo.jpg" alt="Logo" className="navbar-logo-icon" />
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/medications">Medications</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
