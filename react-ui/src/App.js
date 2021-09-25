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
   */
  const [movies, setMovies] = useState(undefined)
  const [movieAttributes, setMovieAttributes] = useState(undefined)
  const [names, setNames] = useState(undefined)

  useEffect(() => {
    moviesService.getDefaultAllMovies()
      .then((movies) => setMovies(movies))
      .catch((error) => console.error(error))
  }, [])

  useEffect(() => {
    moviesService.getDefaultAllMovieAttributes()
      .then((movieAttributes) => setMovieAttributes(movieAttributes))
      .catch((error) => console.error(error))
  }, [])

  useEffect(() => {
    namesService.getDefaultAllNames()
      .then((names) => setNames(names))
      .catch((error) => console.error(error))
  }, [])

  console.log(movieAttributes)

  /*
   *  Why props drilling instead of using Context API?
   */
  if (!(movies === undefined || movieAttributes == undefined || names == undefined)) {
    return (
      <RouterComponent movies={movies} movieAttributes={movieAttributes} names={names} />
    )
  } else {
    return (
      <LoadingScreen />
    )
  }
}

export default App
