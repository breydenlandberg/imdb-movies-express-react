import axios from 'axios'

const baseURL = '/api/names'

/*
 *  ES6 Promise methods (.then .catch .finally) are more suitable to the service methods than ES7 async/await syntax in terms of application "flow".
 *
 *  The following methods are defined as part of a service that allows the React front end to consume the back end Express server API, specifically the name routes.
 */

/*
 *  DESCRIPTION: Get all name records from the external Postgres database by using the axios framework to send an HTTP GET request an URL endpoint
 *               handled by the back end Express server API.
 *
 *  @returns {Promise}  Promise that resolves to the response data; an array of all rows in the imdb_names table represented as JSON objects.
 */
const getAllNames = () => {
  return axios.get(baseURL)
    .then((response) => response.data)
    .catch((error) => console.error(error))
}

/*
 *  DESCRIPTION: Get a single name record from the external Postgres database by using the axios framework to send an HTTP GET request an URL endpoint
 *               handled by the back end Express server API.
 *
 *  @param {type}  name_id; unique id specifying the desired name record
 *
 *  @returns {Promise}  Promise that resolves to the response data; the desired row from the imdb_names table represented as a JSON object.
 */
const getSingleNameById = (name_id) => {
  return axios.get(`${baseURL}/${name_id}`)
    .then((response) => response.data)
    .catch((error) => console.error(error))
}

/*
 *  DESCRIPTION: Get all name character records from the external Postgres database by using the axios framework to send an HTTP GET request an URL endpoint
 *               handled by the back end Express server API.
 *
 *  @returns {Promise}  Promise that resolves to the response data; an array of all rows in the principal_characters table represented as JSON objects.
 */
const getAllNamesCharacters = () => {
  return axios.get(`${baseURL}/characters`)
    .then((response) => response.data)
    .catch((error) => console.error(error))
}

/*
 *  DESCRIPTION: Get name character records for a specific movie from the external Postgres database by using the axios framework to send an HTTP GET request an URL endpoint
 *               handled by the back end Express server API.
 *
 *  @param {type}  name_id; unique id specifying the desired principal_characters records
 *
 *  @returns {Promise}  Promise that resolves to the response data; the desired rows from the principal_characters table represented as JSON objects.
 */
const getSingleNameCharactersById = (name_id) => {
  return axios.get(`${baseURL}/characters/${name_id}`)
    .then((response) => response.data)
    .catch((error) => console.error(error))
}

/*
 *  DESCRIPTION: Get name, their role, and their character records for a specific movie from the external Postgres database by using the axios framework to send an HTTP GET request an URL endpoint
 *               handled by the back end Express server API.
 *
 *  @param {type}  movie_id; unique id specifying the desired records
 *
 *  @returns {Promise}  Promise that resolves to the response data; the desired rows from the queried tables represented as JSON objects.
 */
const getMovieNamesPrincipalsById = (movie_id) => {
  return axios.get(`${baseURL}/advanced-query/movie-names-roles-characters/${movie_id}`)
    .then((response) => response.data)
    .catch((error) => console.error(error))
}

export default { getAllNames, getSingleNameById, getAllNamesCharacters, getSingleNameCharactersById, getMovieNamesPrincipalsById }
