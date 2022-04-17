const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'api_key=bb0c5b52be3456598a7badc1793c41c3';

export function FetchMovies() {
  return fetch(`${BASE_URL}trending/all/day?${API_KEY}`);
}

export function fetchSearchMovie(input) {
  return fetch(
    `${BASE_URL}search/movie?${API_KEY}&language=en-US&page=1&query=${input}`
  );
}
export function fetchCast(id) {
  return fetch(`${BASE_URL}movie/${id}/credits?${API_KEY}&language=en-US`);
}
export function fetchReview(id) {
  return fetch(`
${BASE_URL}movie/${id}/reviews?${API_KEY}&language=en-US&page=1`);
}
