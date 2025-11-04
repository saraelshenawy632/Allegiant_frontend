import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <Link to="/" className="logo-text">
          Allegiant
        </Link>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" className={`nav-link ${isActive("/")}`} onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/cast" className={`nav-link ${isActive("/cast")}`} onClick={() => setMenuOpen(false)}>Cast</Link>
          </li>
          <li>
            <Link to="/moviedetail" className={`nav-link ${isActive("/moviedetail")}`} onClick={() => setMenuOpen(false)}>Trailer</Link>
          </li>
          <li>
            <Link to="/review" className={`nav-link ${isActive("/review")}`} onClick={() => setMenuOpen(false)}>Reviews</Link>
          </li>
          <li>
            <Link to="/about" className={`nav-link ${isActive("/about")}`} onClick={() => setMenuOpen(false)}>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
