import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CafeNavbar.css";
import logo from "../assets/logo.png";

const CafeNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Cafe Logo" />
      </div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={handleLinkClick}>Home</Link>
        <Link to="/about" onClick={handleLinkClick}>About Us</Link>
        <Link to="/menu" onClick={handleLinkClick}>Menu</Link>
        <Link to="/place-order" onClick={handleLinkClick}>Place Order</Link>
        <Link to="/gallery" onClick={handleLinkClick}>Gallery</Link>
        <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
      </div>
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default CafeNavbar;
