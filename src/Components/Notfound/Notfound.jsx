import React from "react";
import { Link } from "react-router-dom";
import "./Notfound.css";

export default function NotFound() {
  return (
    <section className="notfound-section">
      <div className="notfound-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Oops! The page you are looking for does not exist.</p>
        <Link to="/" className="home-link">Go Back Home</Link>
      </div>
    </section>
  );
}
