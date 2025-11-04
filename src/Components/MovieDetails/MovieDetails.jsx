import React, { useState, useEffect } from "react";
import "./MovieDetails.css";

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [showTrailer, setShowTrailer] = useState(false);

  const movieId = 262504; // Allegiant
  const apiKey = "143f103d43e2c96a6827cb69bdc2170b";
  const TRAILER_ID = "LCywVLaNqCg"; // Trailer الرسمي

  useEffect(() => {
    const fetchData = async () => {
      const [movieRes, castRes] = await Promise.all([
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`),
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`)
      ]);
      const movieData = await movieRes.json();
      const castData = await castRes.json();
      setMovie(movieData);
      setCast(castData.cast.slice(0, 10));
    };
    fetchData();
  }, []);
  

  if (!movie) return <div className="loading">Loading...</div>;

  return (
    <div className="movie-details">
      <div className="movie-header">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="movie-poster"
        />
        <div className="movie-info">
          <h1>{movie.title}</h1>
          <p className="tagline">{movie.tagline}</p>
          <p>{movie.overview}</p>
          <p><strong>Release:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> {movie.vote_average.toFixed(1)}/10</p>
          <button className="watch-trailer-btn" onClick={() => setShowTrailer(true)}>
             Watch Trailer
          </button>
        </div>
      </div>

      <h2 className="cast-title">Cast of Allegiant</h2>

      <div className="cast-grid">
        {cast.map(actor => (
          <div className="cast-card" key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                  : "https://via.placeholder.com/300x450?text=No+Image"
              }
              alt={actor.name}
            />
            <h3>{actor.name}</h3>
            <p>{actor.character}</p>
          </div>
        ))}
      </div>

      {showTrailer && (
        <div className="trailer-modal show" onClick={() => setShowTrailer(false)}>
          <div className="trailer-content" onClick={e => e.stopPropagation()}>
            <button className="close-trailer" onClick={() => setShowTrailer(false)}>×</button>

            <iframe
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${TRAILER_ID}?autoplay=1&mute=0&controls=1&modestbranding=0&rel=0`}
              title="Allegiant Trailer"
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
