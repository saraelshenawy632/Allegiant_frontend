import React from "react";
import "./About.css";

export default function About() {
  const castMembers = [
    "Shailene Woodley",
    "Theo James",
    "Ansel Elgort",
    "Octavia Spencer",
    "Johanna Reyes",
    "Keiynan Lonsdale",
    "Uriah Pedrad",
  ];

  const reviews = [
    {
      author: "CinemaSerf",
      content: `Picking up where "Insurgent" left off; "Tris" and "Four" determine that they must escape the walls of Chicago and make a new life for themselves - regardless of the risks and uncertainty. Once free - perhaps the only few moments of tension in the film - they hook up with a group of ostensibly like-minded rebels; but are they who they say they are? Seeds of suspicion are sewn that test the relationship between Theo & Shailene; and frankly the patience of the viewer. Jeff Daniels tries hard to inject some menace as "David" but Miles Teller "Peter" is just plain irritating. We are clearly heading...`,
    },
  ];

  return (
    <>
      <section className="about-section">
        <h1>About Allegiant</h1>
        <p>
          Allegiant (2016) is the third installment of the Divergent series.
          Here is the main cast, some supporting actors, and a highlighted
          review from the audience.
        </p>

        <div className="about-images">
          <div className="actor-card">
            <img
              src="https://image.tmdb.org/t/p/w500/gL2NvHKW9wAH3qkZuJ76ULUiArB.jpg"
              alt="Shailene Woodley"
            />
            <h3>Shailene Woodley</h3>
          </div>

          <div className="actor-card">
            <img
              src="https://image.tmdb.org/t/p/w500/lSC4cMhcQeCjPFkK6qCjSGDSeR3.jpg"
              alt="Theo James"
            />
            <h3>Theo James</h3>
          </div>
        </div>

        <h2>Main & Supporting Cast</h2>
        <ul className="cast-list">
          {castMembers.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>

        <h2>Movie Info</h2>
        <p>
          <strong>Status:</strong> Released
        </p>
        <p>
          <strong>Original Language:</strong> English
        </p>
        <p>
          <strong>Budget:</strong> $110,000,000
        </p>
        <p>
          <strong>Revenue:</strong> $179,246,868
        </p>
        <p>
          <strong>Keywords:</strong> Dystopia, Sci-Fi, Adventure
        </p>

        <h2>Highlighted Review</h2>
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <p>{review.content}</p>
            <p className="review-author">- {review.author}</p>
          </div>
        ))}
      </section>
    </>
  );
}
