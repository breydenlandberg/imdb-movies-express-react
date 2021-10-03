import axios from 'axios'

const baseURL = '/api/movies'

/*
 *  .then promises instead of async/await? Why? Why not?
 */
const getDefaultAllMovies = () => {
  return axios
    .get(baseURL)
    .then((response) => response.data)
    .catch((error) => console.error(error))
}

/*
 *  DESCRIPTION: 
 *
 *  @param {type}
 * 
 *  @returns {Promise}
 */
const getDefaultSingleMovie = (movie_id) => {
  return axios
    .get(`${baseURL}/${movie_id}`)
    .then((response) => response.data)
    .catch((error) => console.error(error))
}

/*
 *  Movie attributes.
 */
const getDefaultAllMoviesAttributes = () => {
  return axios
    .get(`${baseURL}/attributes`)
    .then((response) => response.data)
    .catch((error) => console.log(error))
}

/*
 *  Movie attributes.
 */
const getDefaultSingleMovieAttributes = (movie_id) => {
  return axios
    .get(`${baseURL}/attributes/${movie_id}`)
    .then((response) => response.data)
    .catch((error) => console.log(error))
}

/*
 *  Movie attributes.
 */
const getNameAllMoviesRoles = (name_id) => {
  return axios
    .get(`${baseURL}/custom-query/name-movies-roles/${name_id}`)
    .then((response) => response.data)
    .catch((error) => console.log(error))
}

export default { getDefaultAllMovies, getDefaultSingleMovie, getDefaultAllMoviesAttributes, getDefaultSingleMovieAttributes, getNameAllMoviesRoles }
