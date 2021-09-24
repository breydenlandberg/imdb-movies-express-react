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

export default { getDefaultAllMovies }
