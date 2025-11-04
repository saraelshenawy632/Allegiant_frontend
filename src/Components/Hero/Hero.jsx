import React, { useEffect, useState } from "react";
import "./Hero.css";

export default function Hero() {
  const [cast, setCast] = useState([]);
  const [selectedActor, setSelectedActor] = useState(null);
  const [highlightId, setHighlightId] = useState(null);

  const movieId = 262504; 
  const apiKey = "143f103d43e2c96a6827cb69bdc2170b";

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`
        );
        const data = await res.json();
        setCast(data.cast.slice(0, 21)); 
      } catch (error) {
        console.error("Error fetching cast:", error);
      }
    };
    fetchCast();
  }, []);

  const handleSelectChange = (e) => {
    const actorId = parseInt(e.target.value);
    const actor = cast.find((c) => c.id === actorId);
    setSelectedActor(actor);
    setHighlightId(actorId);

    const element = document.getElementById(`cast-${actorId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      element.classList.add("glow");
      setTimeout(() => element.classList.remove("glow"), 2000);
    }
  };

  const handleCardClick = (actor) => {
    setSelectedActor(actor);
    setHighlightId(actor.id);

    const element = document.getElementById(`cast-${actor.id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      element.classList.add("glow");
      setTimeout(() => element.classList.remove("glow"), 2000);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Cast of Allegiant</h1>

          <select
            className="cast-dropdown"
            onChange={handleSelectChange}
            value={highlightId || ""}
          >
            <option value="" disabled>
              Select an actor
            </option>
            {cast.map((actor) => (
              <option key={actor.id} value={actor.id}>
                {actor.name}
              </option>
            ))}
          </select>

          {selectedActor && (
            <div className="actor-details">
              <img
                src={
                  selectedActor.profile_path
                    ? `https://image.tmdb.org/t/p/w300${selectedActor.profile_path}`
                    : "https://via.placeholder.com/180x240?text=No+Image"
                }
                alt={selectedActor.name}
              />
              <div className="actor-info">
                <h2>{selectedActor.name}</h2>
                <p>
                  <strong>Character:</strong> {selectedActor.character}
                </p>
                <p>
                  <strong>Known For:</strong>{" "}
                  {selectedActor.known_for_department || "N/A"}
                </p>
              </div>
            </div>
          )}

          <div className="cast-grid">
            {cast.map((actor) => (
              <div
                id={`cast-${actor.id}`}
                key={actor.id}
                className={`cast-card ${
                  highlightId === actor.id ? "highlight" : ""
                }`}
                onClick={() => handleCardClick(actor)}
              >
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                      : "https://via.placeholder.com/180x240?text=No+Image"
                  }
                  alt={actor.name}
                />
                <h3>{actor.name}</h3>
                <p>{actor.character}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
