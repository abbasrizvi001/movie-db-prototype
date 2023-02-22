import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";

export const MovieItem = ({ title, poster, overview, date }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="movie-card">
      <div className="container">
        <img
          className="card-img-top"
          src={poster}
          alt="poster"
          style={{ borderRadius: "10px" }}
        />
        {clicked ? (
          <Button
            variant="contained"
            color="secondary"
            className="btn"
            sx={{ borderRadius: 32 }}
            onClick={() => setClicked(true)}
          >
            <DoneIcon />
          </Button>
        ) : (
          <Button
            variant="contained"
            className="btn"
            sx={{ borderRadius: 32 }}
            onClick={() => setClicked(true)}
          >
            <AddIcon />
          </Button>
        )}
      </div>
      <div className="card-body">
        <h6 className="card-title" style={{ fontWeight: "bold" }}>
          {title}
        </h6>
        <p
          className="card-date"
          style={{
            fontSize: "14px",
            fontStyle: "italic",
            marginBottom: "auto",
          }}
        >
          {date}
        </p>
        <p className="card-text" style={{ fontSize: "12px" }}>
          {overview}
        </p>
      </div>
    </div>
  );
};
