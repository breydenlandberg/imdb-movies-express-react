import { Link } from 'react-router-dom'

/*
 *
 */
const MovieLinkBox = ({ movie }) => {
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
  } = movie

  /*
   *
   */
  return (
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
      <p class='subtitle is-5 has-text-grey'> User votes: {movie_votes} </p>
      <p class='subtitle is-5 has-text-grey'> Average vote score: {movie_avg_vote} </p>
      <p class='subtitle is-5 has-text-grey'> User reviews: {movie_user_reviews} </p>
      <p class='subtitle is-5 has-text-grey'> Critic reviews: {movie_critic_reviews} </p>
    </div>
  )
}

export default MovieLinkBox
