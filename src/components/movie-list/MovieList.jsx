import React from "react";

export const MovieList = ({
  title,
  poster,
  overview,
  rating,
}) => {
  return (
    <div className="movie-card-parent">
      <div className="movie-card">
        <div className="card-body">
        <img className="card-img-top" src={poster} alt="poster" />
          <h4 className="card-title">{title}</h4>
          <p className="text-justify" style={{ fontSize: "14px" }}>
            {overview}
          </p>
        </div>
        <div className="card-footer">
          <div className="clearfix">
            <div className="card-footer-badge float-right badge badge-primary badge-pill">
              {rating}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
