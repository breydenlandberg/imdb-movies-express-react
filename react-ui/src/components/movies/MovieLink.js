import { Link } from 'react-router-dom'

/*
 *  Any way to compose/structure this better?
 */
const MovieLink = ({ data }) => {
  const { movie_id, movie_title, movie_release_year, movie_duration, movie_production_company, movie_description, movie_avg_vote, movie_votes, movie_user_reviews, movie_critic_reviews } = data

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

          <p class='subtitle is-5 has-text-grey'> Subtitle </p>
        </div>
      </div>

      <div class='column'>
        <div class='box has-background-black-ter'>
          <p class='title is-3 has-text-light'> movie_attributes </p>
          <p class='subtitle is-5 has-text-grey'> Subtitle </p>
        </div>
      </div>
    </div>
  )
}

export default MovieLink
