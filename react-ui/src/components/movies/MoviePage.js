import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import namesService from '../../services/namesService'
import Loading from '../Loading'

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

  const [movieNamesPrincipals, setMovieNamesPrincipals] = useState(undefined)
  /*
   *
   */
  useEffect(() => {
    namesService.getCustomMovieNamesPrincipals(movie_id)
      .then((customQueryResults) => setMovieNamesPrincipals(customQueryResults))
      .catch((error) => console.error(error))
  }, [])

  console.log(movieNamesPrincipals)

  /*
   *
   */
  if (movieNamesPrincipals === undefined) {
    return (
      <Loading />
    )
  } else {
    return (
      <div>
        <section class='section is-large has-background-black-bis'>
          <div class='columns is-centered is-full'>
            <p class='title is-1 has-text-light'> {movie_title} </p>
          </div>

          <div class='columns is-centered is-full'>
            <p class='subtitle is-3 has-text-grey-light'> {movie_release_year} </p>
          </div>
        </section>

        <section class='section has-background-black-bis'>
          <div class='container py-3'>
            <div class='box has-background-black-ter'>
              <p class='subtitle is-5 has-text-grey-light'> Goes for
                <span class='subtitle is-5 has-text-white'> {movie_duration} minutes </span>
              </p>
              <p class='subtitle is-5 has-text-grey-light'> Produced by
                <span class='subtitle is-5 has-text-white'> {movie_production_company} </span>
              </p>
              <p class='subtitle is-5 has-text-grey-light'> Description:
                <p class='subtitle is-5 has-text-white'> {movie_description} </p>
              </p>
              <p class='subtitle is-5 has-text-grey-light'> Users voted on this movie
                <span class='subtitle is-5 has-text-white'> {movie_votes} </span>
                times, and the average user vote has a score of
                <span class='subtitle is-5 has-text-white'> {movie_avg_vote} </span>
              </p>
              <p class='subtitle is-5 has-text-grey-light'> There are
                <span class='subtitle is-5 has-text-white'> {movie_user_reviews} </span>
                user reviews for this movie, and
                <span class='subtitle is-5 has-text-white'> {movie_critic_reviews} </span>
                critic reviews
              </p>
            </div>
          </div>
        </section>

        <section class='section is-small has-background-black-bis'>
          <div class='columns is-centered is-full'>
            <p class='subtitle is-3 has-text-grey-light'> Cast roles and characters  </p>
          </div>
        </section>

        <section class='section has-background-black-bis'>
          <div class='container py-3'>
            <div class='box has-background-black-ter'>
              {movieNamesPrincipals.map((namePrincipals) =>
                <p class='subtitle is-5 has-text-grey-light'>
                  <span class='subtitle is-5 has-text-white'> {namePrincipals.current_name} </span>
                  has the role of
                  <span class='subtitle is-5 has-text-white'> {namePrincipals.name_role} </span>
                  and plays
                  <span class='subtitle is-5 has-text-white'> {namePrincipals.name_characters} </span>
                </p>
              )}
            </div>
          </div>
        </section>

        <section class='section is-small has-background-black-bis'>
          <div class='columns is-centered is-full'>
            <p class='subtitle is-3 has-text-grey-light'> Browse other movies from the people involved in {movie_title}  </p>
          </div>
        </section>

        <section class='section has-background-black-bis'>
          <div class='container py-3'>
            <div class='box has-background-black-ter'>
              <p class='subtitle is-5 has-text-grey-light'> Goes for
                <span class='subtitle is-5 has-text-white'> {movie_duration} minutes </span>
              </p>
              <p class='subtitle is-5 has-text-grey-light'> Produced by
                <span class='subtitle is-5 has-text-white'> {movie_production_company} </span>
              </p>
              <p class='subtitle is-5 has-text-grey-light'> Description:
                <p class='subtitle is-5 has-text-white'> {movie_description} </p>
              </p>
              <p class='subtitle is-5 has-text-grey-light'> Users voted on this movie
                <span class='subtitle is-5 has-text-white'> {movie_votes} </span>
                times, and the average user vote has a score of
                <span class='subtitle is-5 has-text-white'> {movie_avg_vote} </span>
              </p>
              <p class='subtitle is-5 has-text-grey-light'> There are
                <span class='subtitle is-5 has-text-white'> {movie_user_reviews} </span>
                user reviews for this movie, and
                <span class='subtitle is-5 has-text-white'> {movie_critic_reviews} </span>
                critic reviews
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default MoviePage
