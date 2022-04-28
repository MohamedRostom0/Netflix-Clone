import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Row.css";

import RowPoster from "./RowPoster";

// import Youtube from "react-youtube";

const Row = (props) => {
  const [movies, setMovies] = useState([]);
  const { title, fetchUrl, isLargeRow } = props;

  // const baseURL = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(fetchUrl);
      const results = response.data.results;

      // console.table(results);
      setMovies(results);
    };

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <RowPoster key={movie.id} movie={movie} isLargeRow={isLargeRow} />
          );
        })}
      </div>
    </div>
  );
};

export default Row;

/* return (
  <img
    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
    key={movie.id}
    alt={movie.title}
    src={`${baseURL}${
      isLargeRow ? movie.poster_path : movie.backdrop_path
    }`}
  />
); */
