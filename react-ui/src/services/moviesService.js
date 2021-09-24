import axios from 'axios'

const baseURL = '/api/movies'

const getDefaultAllMovies = () => {
  return axios
    .get(baseURL)
    .then((response) => response.data)
    .catch((error) => console.error(error))
}

export default { getDefaultAllMovies }
