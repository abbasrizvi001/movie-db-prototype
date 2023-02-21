import * as React from "react";
import { Routes, Route, } from "react-router-dom";
import { Home } from './views/home'
import { MovieInfo } from './views/movie-info'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/movie-info" element={<MovieInfo />} />
      </Routes>
    </div>
  );
}
