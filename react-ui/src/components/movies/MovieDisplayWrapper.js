import MovieAttributesBox from './MovieAttributesBox'
import MovieLinkBox from './MovieLinkBox'

/*
 *
 */
const MovieDisplayWrapper = ({ movie }) => {
  const movie_id = movie.movie_id // For clarity.

  return (
    <div class='columns py-3'>
      <div class='column is-three-fifths'>
        <MovieLinkBox movie={movie} />
      </div>

      <div class='column'>
        <MovieAttributesBox movie_id={movie_id} />
      </div>
    </div>
  )
}

export default MovieDisplayWrapper
