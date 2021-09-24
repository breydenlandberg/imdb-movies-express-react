import React, { useEffect, useState } from 'react'
import moviesService from './services/moviesService'
import namesService from './services/namesService'
import RouterComponent from './components/RouterComponent'

/*
 *  Entry point to React application.
 */
const App = () => {
  const [movies, setMovies] = useState(undefined)
  const [names, setNames] = useState(undefined)

  useEffect(() => {
    moviesService.getDefaultAllMovies()
      .then((movies) => setMovies(movies))
      .catch((error) => console.error(error))
  }, [])

  useEffect(() => {
    namesService.getDefaultAllNames()
      .then((names) => setNames(names))
      .catch((error) => console.error(error))
  }, [])

  /*
   *  Why props drilling instead of using Context API?
   */
  return (
    <RouterComponent movies={movies} names={names} />
  )
}

export default App
