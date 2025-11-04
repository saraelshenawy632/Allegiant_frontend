import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const services = [
    {
      title: "Cast & Crew",
      description: "Meet the stars behind the story.",
      icon: "fa-solid fa-users",
      link: "/cast",
      color: "#f59e0b",
    },
    {
      title: "Behind the Scenes",
      description: "Exclusive footage from production.",
      icon: "fa-solid fa-video",
      link: "/moviedetail",
      color: "#8b5cf6",
    },
    {
      title: "Reviews & Ratings",
      description: "See what critics and fans say.",
      icon: "fa-solid fa-star",
      link: "/review",
      color: "#10b981",
    },
    {
      title: "Official Trailer",
      description: "Watch the trailer in HD.",
      icon: "fa-solid fa-film",
      link: "/moviedetail",
      color: "#e50914",
    },
  ];

  return (
    <div className="home">
      <section className="hero-wrapper">
        <div className="video-container">
          <video
            className="hero-video"
            src="/videos/1.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/poster.jpg"   
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">Allegiant</span>
          </h1>

          <div className="hero-actions">
            <Link to="/movies" className="btn-secondary">
              Explore Movies
            </Link>
          </div>
        </div>
      </section>
<section className="features-section" id="services">
  <div className="features-container">
    <h2 className="features-title">Movie Features</h2>
    <p className="features-subtitle">
      Everything you need to dive into the world of Allegiant
    </p>

    <div className="features-row">
      {services.map((s, i) => (
        <Link
          key={i}
          to={s.link}
          className="feature-card"
          style={{ "--card-glow": s.color }}
        >
          <div className="icon-box">
            <i className={`fa-solid ${s.icon}`}></i>
          </div>
          <h3>{s.title}</h3>
          <p>{s.description}</p>
          <span className="arrow">→</span>
        </Link>
      ))}
    </div>
  </div>
</section>

    </div>
  );
}