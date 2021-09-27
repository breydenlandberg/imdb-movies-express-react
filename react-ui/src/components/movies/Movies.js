import React, { useEffect, useState } from 'react'
import moviesService from '../../services/moviesService'
import LoadingScreen from '../LoadingScreen'

import MovieLink from './MovieLink'

const Movies = ({ data, moviesAttributes }) => {
  const [movies, setMovies] = useState(undefined)
  //const [movieAttributes, setMovieAttributes] = useState(undefined)

  useEffect(() => {
    moviesService.getDefaultAllMovies()
      .then((movies) => setMovies(movies))
      .catch((error) => console.error(error))
  }, [])

  console.log(movies)

  if(movies === undefined) {
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
          {data.map((movie) =>
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
