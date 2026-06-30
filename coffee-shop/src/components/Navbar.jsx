// Navbar.jsx — Top navigation bar with logo and links
import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  // Track whether the page has been scrolled for shadow effect
  const [scrolled, setScrolled] = useState(false);
  // Track mobile menu open/close state
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section by id
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      {/* Logo */}
      <div className="navbar__logo" onClick={() => scrollTo("home")}>
        ☕ <span>Coffee House</span>
      </div>

      {/* Hamburger for mobile */}
      <button
        className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Navigation links */}
      <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
        <li><button onClick={() => scrollTo("home")}>Home</button></li>
        <li><button onClick={() => scrollTo("menu")}>Menu</button></li>
        <li><button onClick={() => scrollTo("contact")}>Contact</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
