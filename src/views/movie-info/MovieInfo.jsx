import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Container from "@material-ui/core/Container";
import AppHeader from "../../components/app-header/AppHeader";
import { MovieList } from "../../components/movie-list/MovieList";
import ReactPaginate from "react-paginate";

export function MovieInfo() {
  const [topTenResults, setTopTenResults] = useState([]);
  const { state } = useLocation();
  const { response, searchQuery } = state;
  const {
    results,
    total_pages: totalPages,
    total_results: totalResults,
  } = response;

  useEffect(() => {
    setTopTenResults(results.slice(0, 10));
  }, [results]);

  async function handlePageClick({ selected: selectedPage }) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=36fa93a60bfe6f4442c5db70e291c96c&language=en-US&query=${searchQuery}&page=${
      selectedPage + 1
    }&include_adult=false`;
    const response = await fetch(url).then((response) => response.json());
    setTopTenResults(response.results.slice(0, 10));
  }

  return (
    <>
      <AppHeader />
      <Container component="main" maxWidth="lg">
        <h3>Your search results for: "{searchQuery}"</h3>
        <div className="movie-list-horizontal">
          {topTenResults.map(
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
        <h5>Total number of results: {totalResults}</h5>
        <ReactPaginate
          previousLabel="← Previous"
          nextLabel="Next →"
          pageCount={totalPages}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"pagination__link--active"}
          renderOnZeroPageCount={null}
        />
      </Container>
    </>
  );
}
