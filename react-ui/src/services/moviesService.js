import axios from 'axios'

const baseURL = '/api/movies'

/*
 *  ES6 Promise methods (.then .catch .finally) are more suitable to the service methods than ES7 async/await syntax in terms of application "flow".
 *
 *  The following methods are defined as part of a service that allows the React front end to consume the back end Express server API, specifically the movie routes.
 */

/*
 *  DESCRIPTION: Get all movie records from the external Postgres database by using the axios framework to send an HTTP GET request an URL endpoint
 *               handled by the back end Express server API.
 *
 *  @returns {Promise}  Promise that resolves to the response data; an array of all rows in the imdb_movies table represented as JSON objects.
 */
const getAllMovies = () => {
  return axios
    .get(baseURL)
    .then((response) => response.data)
    .catch((error) => console.error(error))
}

/*
 *  DESCRIPTION: Get a single movie record from the external Postgres database by using the axios framework to send an HTTP GET request an URL endpoint
 *               handled by the back end Express server API.
 *
 *  @param {type}  movie_id; unique id specifying the desired movie record
 *
 *  @returns {Promise}  Promise that resolves to the response data; the desired row from the imdb_movies table represented as a JSON object.
 */
const getSingleMovieById = (movie_id) => {
  return axios
    .get(`${baseURL}/${movie_id}`)
    .then((response) => response.data)
    .catch((error) => console.error(error))
}

/*
 *  DESCRIPTION: Get all movie attribute records from the external Postgres database by using the axios framework to send an HTTP GET request an URL endpoint
 *               handled by the back end Express server API.
 *
 *  @returns {Promise}  Promise that resolves to the response data; an array of all rows in the movie_attributes table represented as JSON objects.
 */
const getAllMoviesAttributes = () => {
  return axios
    .get(`${baseURL}/attributes`)
    .then((response) => response.data)
    .catch((error) => console.log(error))
}

/*
 *  DESCRIPTION: Get movie attribute records for a specific movie from the external Postgres database by using the axios framework to send an HTTP GET request an URL endpoint
 *               handled by the back end Express server API.
 *
 *  @param {type}  movie_id; unique id specifying the desired movie_attributes records
 *
 *  @returns {Promise}  Promise that resolves to the response data; the desired rows from the movie_attributes table represented as JSON objects.
 */
const getSingleMovieAttributesById = (movie_id) => {
  return axios
    .get(`${baseURL}/attributes/${movie_id}`)
    .then((response) => response.data)
    .catch((error) => console.log(error))
}

/*
 *  DESCRIPTION: Get movie and role records for a specific name from the external Postgres database by using the axios framework to send an HTTP GET request an URL endpoint
 *               handled by the back end Express server API.
 *
 *  @param {type}  name_id; unique id specifying the desired records
 *
 *  @returns {Promise}  Promise that resolves to the response data; the desired rows from the queried tables represented as JSON objects.
 */
const getNameMoviesRolesById = (name_id) => {
  return axios
    .get(`${baseURL}/advanced-query/name-movies-roles/${name_id}`)
    .then((response) => response.data)
    .catch((error) => console.log(error))
}

export default { getAllMovies, getSingleMovieById, getAllMoviesAttributes, getSingleMovieAttributesById, getNameMoviesRolesById }
