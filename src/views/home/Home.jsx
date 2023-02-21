import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <p>Test Text area</p>
      <nav>
        <ul>
          <li>
            <Link to="/movie-info">Movie Info</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
