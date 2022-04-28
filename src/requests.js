const APIKEY = "bac62fc56a4fb0e4b904bb592f783e80";

// https://api.themoviedb.org/3
const requests = {
  fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
  // fetchNextflixOriginals: `/discover/tv?api_key=${APIKEY}&language=en-US&region=US&networks=213`,
  fetchNextflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
};

export default requests;
