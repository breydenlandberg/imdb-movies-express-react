import React, { useEffect, useState } from 'react'
import moviesService from '../../services/moviesService'
import Loading from '../Loading'
import MovieDisplayWrapper from './MovieDisplayWrapper'

/*
 *
 */
const MoviesPage = () => {
  const [movies, setMovies] = useState(undefined)

  /*
   *
   */
  useEffect(() => {
    moviesService.getDefaultAllMovies()
      .then((movies) => setMovies(movies))
      .catch((error) => console.error(error))
  }, [])

  /*
   *
   */
  if (movies === undefined) {
    return (
      <Loading />
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
            <MovieDisplayWrapper movie={movie} />
          )}
        </section>
      </div>
    )
  }
}

export default MoviesPage
