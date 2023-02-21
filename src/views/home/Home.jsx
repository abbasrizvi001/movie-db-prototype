import React, { useState, useEffect } from "react";
import SearchBar from "material-ui-search-bar";
import { Link } from "react-router-dom";

export function Home() {
  const [movieData, setMovieData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=36fa93a60bfe6f4442c5db70e291c96c&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => setMovieData(data));
  }, []);

  const onClick = () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=36fa93a60bfe6f4442c5db70e291c96c&language=en-US&query=${searchQuery}&page=1&include_adult=false`;
    fetch(url)
      .then((response) => response.json())
      .then((x) => console.log(x));
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/movie-info">Movie Info</Link>
          </li>
        </ul>
      </nav>
      <SearchBar
        onRequestSearch={() => onClick()}
        placeholder="Search for a movie... e.g. The Dark Knight"
        onChange={(newValue) => setSearchQuery(newValue)}
        autoFocus
      />
    </>
  );
}
