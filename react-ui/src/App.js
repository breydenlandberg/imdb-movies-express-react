import React, { useEffect, useState } from 'react'
import moviesService from './services/moviesService'
import RouterComponent from './components/RouterComponent'

/*
 *  Entry point to React application.
 */
function App () {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    moviesService.getDefaultAllMovies()
      .then((movies) => setMovies(movies))
      .catch((error) => console.error(error))
  }, [])

  const MoviesContext = React.createContext(movies)

  return (
    <RouterComponent />
  )
}

export default App
