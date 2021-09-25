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
 *  Movie attributes.
 */
const getDefaultAllMovieAttributes = () => {
  return axios
    .get(`${baseURL}/movie-attributes`)
    .then((response) => response.data)
    .catch((error) => console.log(error))
}

export default { getDefaultAllMovies, getDefaultAllMovieAttributes }
