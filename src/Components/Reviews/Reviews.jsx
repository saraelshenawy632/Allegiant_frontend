import React, { useEffect, useState } from "react";
import "./Review.css";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null); 
  const movieId = 262504; 
  const apiKey = "143f103d43e2c96a6827cb69bdc2170b";

  useEffect(() => {
    const fetchReviews = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US`
      );
      const data = await res.json();
      setReviews(data.results.slice(0, 3));
    };
    fetchReviews();
  }, []);

  const localImages = [
    "/profile_img_1.png",
    "/profile_img_2.png",
    "/profile_img_3.png"
  ];

  return (
    <>
    <div className="reviews-container">
      <h2 className="reviews-title">Movie Reviews</h2>

      <div className="reviews-grid">
        {reviews.map((review, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div className="review-card" key={review.id}>
              <img
                src={localImages[index % localImages.length]}
                alt={review.author}
                className="review-avatar"
              />
              <div className="review-content">
                <h3>{review.author}</h3>
                <p className="review-date">
                  {new Date(review.created_at).toLocaleDateString()}
                </p>
                <p className="review-text">
                  {isExpanded
                    ? review.content
                    : `${review.content.slice(0, 250)}...`}
                </p>

                <button
                  className="read-more"
                  onClick={() =>
                    setExpandedIndex(isExpanded ? null : index)
                  }
                >
                  {isExpanded ? "Show less ↑" : "Read more →"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}
