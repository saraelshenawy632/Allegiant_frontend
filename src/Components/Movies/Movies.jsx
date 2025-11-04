import React, { useEffect, useState } from "react";
import "./Movies.css";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = "143f103d43e2c96a6827cb69bdc2170b";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const urls = [
          `https://api.themoviedb.org/3/movie/1025527?api_key=${apiKey}&language=en-US`,
          `https://api.themoviedb.org/3/movie/101?api_key=${apiKey}&language=en-US`,
          `https://api.themoviedb.org/3/movie/102?api_key=${apiKey}&language=en-US`,
          `https://api.themoviedb.org/3/movie/103?api_key=${apiKey}&language=en-US`,
          `https://api.themoviedb.org/3/movie/104?api_key=${apiKey}&language=en-US`,
          `https://api.themoviedb.org/3/movie/105?api_key=${apiKey}&language=en-US`,
        ];

        const results = await Promise.all(
          urls.map(async (url) => {
            const res = await fetch(url);
            if (!res.ok) throw new Error("Failed to fetch");
            return await res.json();
          })
        );

        setMovies(results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const SkeletonCard = () => (
    <div className="movie-card skeleton">
      <div className="skeleton-img"></div>
      <div className="skeleton-title"></div>
      <div className="skeleton-year"></div>
    </div>
  );

  return (
    <>
      {loading && (
        <div className="spinner-overlay">
          <div className="spinner"></div>
        </div>
      )}

      <section className="movies-section">
        <h2 className="movies-title">
          <span className="gradient-text">Selected Movies</span>
        </h2>

        <div className="movies-grid">
          {loading
            ? Array(6).fill().map((_, i) => <SkeletonCard key={i} />)
            : movies.map((m) => (
                <div key={m.id} className="movie-card">
                  <div className="poster-wrapper">
                    <img
                      src={
                        m.poster_path
                          ? `https://image.tmdb.org/t/p/w300${m.poster_path}`
                          : "https://via.placeholder.com/300x450?text=No+Image"
                      }
                      alt={m.title}
                      loading="lazy"
                    />
                    <div className="poster-overlay"></div>
                  </div>
                  <h3 className="movie-title">{m.title}</h3>
                  <p className="movie-year">{m.release_date?.slice(0, 4) || "N/A"}</p>
                </div>
              ))}
        </div>
      </section>
    </>
  );
}