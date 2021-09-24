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

  console.log(movies)

  useEffect(() => {
    namesService.getDefaultAllNames()
      .then((names) => setMovies(names))
      .catch((error) => console.error(error))
  }, [])

  console.log(names)

  /*
   *  Why props drilling instead of using Context API?
   */
  return (
    <RouterComponent />
  )
}

export default App
