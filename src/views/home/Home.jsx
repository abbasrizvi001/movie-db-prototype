import React, { useState, useEffect } from "react";
import SearchBar from "material-ui-search-bar";
import { useNavigate } from "react-router-dom";
import { MovieList } from "../../components/movie-list/MovieList";
import Container from "@material-ui/core/Container";
import AppHeader from "../../components/app-header/AppHeader";
import { Box } from "@mui/system";

export function Home() {
  const [movieData, setMovieData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=36fa93a60bfe6f4442c5db70e291c96c&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => setMovieData(data.results));
  }, []);

  const onClick = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=36fa93a60bfe6f4442c5db70e291c96c&language=en-US&query=${searchQuery}&page=1&include_adult=false`;
    const response = await fetch(url).then((response) => response.json());
    navigate("/movie-info", { state: {response: response, searchQuery:searchQuery} });
  };

  return (
    <>
      <AppHeader />
      <div className="search-bar-div">
        <SearchBar
          className="search-bar"
          onRequestSearch={() => onClick()}
          placeholder="Search for a movie..."
          onChange={(newValue) => setSearchQuery(newValue)}
          autoFocus
        />
      </div>
      <Container component="main" maxWidth="lg">
        <h3>Most popular this week</h3>
        <div className="movie-list-horizontal">
          {movieData.map(
            ({ title, poster_path, overview, vote_average, id }, index) => {
              let posterUrl = `https://image.tmdb.org/t/p/original/${poster_path}`;
              return (
                <MovieList
                  key={id + index}
                  title={title}
                  poster={posterUrl}
                  overview={overview}
                  rating={vote_average}
                />
              );
            }
          )}
        </div>
      </Container>
    </>
  );
}
