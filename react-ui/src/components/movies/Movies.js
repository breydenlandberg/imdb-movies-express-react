import React, { useEffect, useState } from 'react'
import moviesService from '../../services/moviesService'
import LoadingScreen from '../LoadingScreen'
import MovieLink from './MovieLink'

const Movies = () => {
  const [movies, setMovies] = useState(undefined)
  const [moviesAttributes, setMoviesAttributes] = useState(undefined)

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

  console.log(movies)
  console.log(moviesAttributes)

  if (movies === undefined || moviesAttributes === undefined) {
    return (
      <LoadingScreen />
    )
  } else {
    return (
      <div>
        <section class='section is-large has-background-black-bis'>
          <div class='columns is-centered is-full'>
            <p class='title is-1 has-text-light'> IMDb Movies Page </p>
          </div>

          <div class='columns is-centered is-full'>
            <p class='subtitle is-3 has-text-light'> with subtitle text... </p>
          </div>
        </section>

        <section class='section has-background-black-bis'>
          {movies.map((movie) =>
            <MovieLink
              data={movie}
              // There should be multiple movieAttributes results!!! But this only finds one!!! Use SQL queries instead?
              movieAttributes={
                moviesAttributes.filter(
                  (movieAttributes) => movieAttributes.movie_id === movie.movie_id)
                }
            />
          )}
        </section>
      </div>
    )
  }
}

export default Movies
