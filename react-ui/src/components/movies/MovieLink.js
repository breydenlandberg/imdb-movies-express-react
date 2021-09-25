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
  const {
    movie_genres,
    movie_countries,
    movie_directors,
    movie_writers,
    movie_actors
  } = movieAttributes

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
          <p class='subtitle is-5 has-text-grey'> Genres: {movie_genres} </p>
          <p class='subtitle is-5 has-text-grey'> Countries: {movie_countries} </p>
          <p class='subtitle is-5 has-text-grey'> Directors: {movie_directors} </p>
          <p class='subtitle is-5 has-text-grey'> Writers: {movie_writers} </p>
          <p class='subtitle is-5 has-text-grey'> Actors: {movie_actors} </p>
        </div>
      </div>
    </div>
  )
}

export default MovieLink
