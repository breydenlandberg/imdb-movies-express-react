import { Link } from 'react-router-dom'

/*
 *  Any way to compose/structure this better?
 */
const MovieLink = ({ data }) => {
  const { movie_id, movie_title, movie_release_year, movie_duration, movie_production_company, movie_description, movie_avg_vote, movie_votes, movie_user_reviews, movie_critic_reviews } = data

  return (
    <div>
      <ul>
        <li key={movie_id}>
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
          {movie_release_year}
          {movie_duration}
          {movie_production_company}
          {movie_description}
          {movie_avg_vote}
          {movie_votes}
          {movie_user_reviews}
          {movie_critic_reviews}
        </li>
      </ul>
    </div>
  )
}

export default MovieLink
