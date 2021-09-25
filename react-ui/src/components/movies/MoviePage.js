import { useLocation } from 'react-router-dom'

const MoviePage = () => {
  const data = useLocation()
  const movieData = data.movieProps
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
  } = movieData

  return (
    <div>
      <ul>
        <li key={movie_id}>
          {movie_id}
          {movie_title}
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

export default MoviePage
