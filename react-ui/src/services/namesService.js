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

export default { getDefaultAllNames }
