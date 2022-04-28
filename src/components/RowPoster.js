import React, { useState } from "react";
import Modal from "./Modal";
import Banner from "./Banner";

const baseURL = "https://image.tmdb.org/t/p/original/";
const RowPoster = ({ movie, isLargeRow }) => {
  const [showModal, setShowModal] = useState(false);

  const posterClickHandler = () => {
    console.log(`poster clicked: ${movie.title}`);
    setShowModal(true);
  };

  const hideModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <img
        onClick={posterClickHandler}
        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
        alt={movie.title}
        src={`${baseURL}${
          isLargeRow ? movie.poster_path : movie.backdrop_path
        }`}
      />

      {showModal && (
        <Modal onClose={hideModal}>
          <Banner fixedMovie={movie} />
          {/* <div>{movie.overview}</div> */}
        </Modal>
      )}
    </>
  );
};

export default RowPoster;
