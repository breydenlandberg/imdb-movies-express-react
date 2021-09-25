import React, { useEffect, useState } from 'react'
import moviesService from './services/moviesService'
import namesService from './services/namesService'
import RouterComponent from './components/RouterComponent'
import LoadingScreen from './components/LoadingScreen'

/*
 *  Entry point to React application.
 */
const App = () => {
  /*
   *  Getting all data and then applying functions over them is faster than using SQL queries with logic to GET the correct data.
   *
   *  Should I be using SQL queries more heavily instead of getting ALL of the data at the beginning of the application loading and then using it?
   */
  const [movies, setMovies] = useState(undefined)
  const [moviesAttributes, setMoviesAttributes] = useState(undefined)
  const [names, setNames] = useState(undefined)

  useEffect(() => {
    moviesService.getDefaultAllMovies()
      .then((movies) => setMovies(movies))
      .catch((error) => console.error(error))
  }, [])

  useEffect(() => {
    moviesService.getDefaultAllMoviesAttributes()
      .then((moviesAttributes) => setMoviesAttributes(moviesAttributes))
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
  if (!(movies === undefined || moviesAttributes === undefined || names === undefined)) {
    return (
      <RouterComponent movies={movies} moviesAttributes={moviesAttributes} names={names} />
    )
  } else {
    return (
      <LoadingScreen />
    )
  }
}

export default App
