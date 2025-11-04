import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Allegiant Website Footer">
      <div className="footer-container">
        <div className="footer-logo">Allegiant</div>

        <nav aria-label="Footer navigation">
          <ul className="footer-links">
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/about" className="footer-link">About</Link></li>
            <li><Link to="/cast" className="footer-link">Cast</Link></li>
            <li><Link to="/review" className="footer-link">Reviews</Link></li>
            <li><Link to="/moviedetail" className="footer-link">Trailler</Link></li>
          </ul>
        </nav>

        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <p className="footer-copy">
          &copy; {currentYear} Allegiant. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
