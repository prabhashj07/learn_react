const API_KEY = "d101130df5d7c84ef05d9d83d9e1a31a";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
const response = await fetch(
`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
const data = await response.json();
return data.results;
}

export const searchMovies = async (query) => {
const response = await fetch(
`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
const data = await response.json();
return data.results;
}
