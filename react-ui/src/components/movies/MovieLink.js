import { Link } from 'react-router-dom'

/*
 *  Any way to compose/structure this better? MovieLink and MoviePage as one? Perhaps use Higher Order Component?
 */
const MovieLink = ({ data, movieAttributes }) => {
  const {
    movie_id,
    movie_title,
    movie_release_year,
    movie_duration,
    movie_production_company,
    movie_description,
    movie_avg_vote,
    movie_votes,
    movie_user_reviews,
    movie_critic_reviews
  } = data

  // abstract away
  const genres = movieAttributes
  .filter(
    (movieAttributes) => movieAttributes.movie_genres !== null
  ).map(
    (movieAttributes) => movieAttributes.movie_genres
  ).join(
    ', '
  )

  const countries = movieAttributes
  .filter(
    (movieAttributes) => movieAttributes.movie_countries !== null
  ).map(
    (movieAttributes) => movieAttributes.movie_countries
  ).join(
    ', '
  )

  const languages = movieAttributes
  .filter(
    (movieAttributes) => movieAttributes.movie_languages !== null
  ).map(
    (movieAttributes) => movieAttributes.movie_languages
  ).join(
    ', '
  )

  const directors = movieAttributes
  .filter(
    (movieAttributes) => movieAttributes.movie_directors !== null
  ).map(
    (movieAttributes) => movieAttributes.movie_directors
  ).join(
    ', '
  )

  const writers = movieAttributes
  .filter(
    (movieAttributes) => movieAttributes.movie_writers !== null
  ).map(
    (movieAttributes) => movieAttributes.movie_writers
  ).join(
    ', '
  )

  const actors = movieAttributes.
  filter(
    (movieAttributes) => movieAttributes.movie_actors !== null
  ).map(
    (movieAttributes) => movieAttributes.movie_actors
  ).join(
    ', '
  )

  return (
    <div class='columns py-3'>
      <div class='column is-three-fifths'>
        <div class='box has-background-black-ter'>
          <p class='title is-3 has-text-light'>
            <Link to={{
              pathname: `movies/${movie_id}`,
              movieProps: {
                movie_title,
                movie_release_year,
                movie_duration,
                movie_production_company,
                movie_description,
                movie_avg_vote,
                movie_votes,
                movie_user_reviews,
                movie_critic_reviews
              }
            }}
            >
              {movie_title}
            </Link>
          </p>

          <p class='subtitle is-5 has-text-grey'> Released in {movie_release_year} </p>
          <p class='subtitle is-5 has-text-grey'> {movie_description} </p>
          <p class='subtitle is-5 has-text-grey'> Number of votes: {movie_votes} | Average vote score: {movie_avg_vote} | Number of user reviews: {movie_user_reviews} | Number of critic reviews: {movie_critic_reviews} </p>
        </div>
      </div>

      <div class='column'>
        <div class='box has-background-black-ter'>
          <p class='title is-3 has-text-light'> Additional movie information </p>
          <p class='subtitle is-5 has-text-grey'> Genres: {genres} </p>
          <p class='subtitle is-5 has-text-grey'> Countries: {countries} </p>
          <p class='subtitle is-5 has-text-grey'> Languages: {languages} </p>
          <p class='subtitle is-5 has-text-grey'> Directors: {directors} </p>
          <p class='subtitle is-5 has-text-grey'> Writers: {writers} </p>
          <p class='subtitle is-5 has-text-grey'> Actors: {actors} </p>
        </div>
      </div>
    </div>
  )
}

export default MovieLink
