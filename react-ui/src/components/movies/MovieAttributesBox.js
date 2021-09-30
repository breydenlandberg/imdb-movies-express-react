import { useEffect, useState } from 'react'
import moviesService from '../../services/moviesService'
import Loading from '../Loading'

/*
 *
 */
const MovieAttributesBox = ({ movie_id }) => {
  const [movieAttributes, setMovieAttributes] = useState(undefined)

  /*
   *
   */
  useEffect(() => {
    moviesService.getDefaultSingleMovieAttributes(movie_id)
      .then((movieAttributes) => setMovieAttributes(movieAttributes))
      .catch((error) => console.error(error))
  }, [])

  /*
   *
   *
   * Can this be made in a reusable/modular manner?
   */
  const extractMovieAttributeFieldsFromRows = (movieAttributesParam) => {
    const genres = movieAttributesParam
      .map((row) => row.movie_genres)
      .filter((field) => field !== null)

    const countries = movieAttributesParam
      .map((row) => row.movie_countries)
      .filter((field) => field !== null)

    const languages = movieAttributesParam
      .map((row) => row.movie_languages)
      .filter((field) => field !== null)

    const directors = movieAttributesParam
      .map((row) => row.movie_directors)
      .filter((field) => field !== null)

    const writers = movieAttributesParam
      .map((row) => row.movie_writers)
      .filter((field) => field !== null)

    const actors = movieAttributesParam
      .map((row) => row.movie_actors)
      .filter((field) => field !== null)

    return {
      genres,
      countries,
      languages,
      directors,
      writers,
      actors
    }
  }

  /*
   *
   */
  if (movieAttributes === undefined) {
    return (
      <Loading />
    )
  } else {
    const {
      genres,
      countries,
      languages,
      directors,
      writers,
      actors
    } = extractMovieAttributeFieldsFromRows(movieAttributes)

    return (
      <div class='box has-background-black-ter'>
        <p class='title is-3 has-text-grey-light'> Additional movie information </p>
        <p class='subtitle is-5 has-text-grey'> Genres: {genres.join(', ')} </p>
        <p class='subtitle is-5 has-text-grey'> Countries: {countries.join(', ')} </p>
        <p class='subtitle is-5 has-text-grey'> Languages: {languages.join(', ')} </p>
        <p class='subtitle is-5 has-text-grey'> Directors: {directors.join(', ')} </p>
        <p class='subtitle is-5 has-text-grey'> Writers: {writers.join(', ')} </p>
        <p class='subtitle is-5 has-text-grey'> Actors: {actors.join(', ')} </p>
      </div>
    )
  }
}

export default MovieAttributesBox
