import React from "react";

export const MovieList = ({ title, poster, overview, rating }) => {
  return (
    <div className="movie-card">
      <div className="card-body">
        <img className="card-img-top" src={poster} alt="poster" />
        <h7 className="text-justify">{title}</h7>
        <p className="text-justify" style={{ fontSize: "12px" }}>
          {overview}
        </p>
      </div>
    </div>
  );
};
