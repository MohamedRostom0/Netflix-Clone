import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";

import "./Banner.css";

function Banner({ fixedMovie }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(requests.fetchNextflixOriginals);

      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
    };

    if (!fixedMovie) {
      fetchData();
    } else {
      setMovie(fixedMovie);
    }
  }, [fixedMovie]);

  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${
              movie?.backdrop_path || movie?.poster_path
            }"
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      {!fixedMovie && <div className="banner--fadebottom"></div>}
    </header>
  );
}

export default Banner;
