import axios from 'axios'

const baseURL = '/api/names'

/*
 *  .then promises instead of async/await? Why? Why not?
 */
const getDefaultAllNames = () => {
  return axios.get(baseURL)
    .then((response) => response.data)
    .catch((error) => console.error(error))
}

/*
 *  .then promises instead of async/await? Why? Why not?
 */
const getDefaultSingleName = (name_id) => {
  return axios.get(`${baseURL}/${name_id}`)
    .then((response) => response.data)
    .catch((error) => console.error(error))
}

/*
 *  .then promises instead of async/await? Why? Why not?
 */
const getDefaultAllNamesCharacters = () => {
  return axios.get(`${baseURL}/names-characters`)
    .then((response) => response.data)
    .catch((error) => console.error(error))
}

/*
 *  .then promises instead of async/await? Why? Why not?
 */
const getDefaultSingleNameCharacters = (name_id) => {
  return axios.get(`${baseURL}/names-characters/${name_id}`)
    .then((response) => response.data)
    .catch((error) => console.error(error))
}

/*
 *  SHOULD THIS BE IN moviesService?
 */
const getCustomMovieNamesPrincipals = (movie_id) => {
  return axios.get(`${baseURL}/custom-query/movie-names-roles-characters/${movie_id}`)
    .then((response) => response.data)
    .catch((error) => console.error(error))
}

export default { getDefaultAllNames, getDefaultSingleName, getDefaultAllNamesCharacters, getDefaultSingleNameCharacters, getCustomMovieNamesPrincipals }
