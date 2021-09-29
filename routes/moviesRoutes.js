/*
 *  Setup.
 */
const express = require('express')
const database = require('../database')
const client = database.client

const router = express.Router()

/*
 *  Get all movies resources using default movies query.
 */
router.get('/', async (request, response) => {
  const getAllMoviesQuery = 'SELECT * FROM imdb_movies WHERE movie_description IS NOT NULL ORDER BY length(movie_description) DESC FETCH FIRST 100 ROWS ONLY'

  console.log(`Querying the Postgres database with: ${getAllMoviesQuery}`)

  try {
    const { rows } = await client.query(getAllMoviesQuery)
    return response.status(200).json(rows)
  } catch (error) {
    throw new Error(error)
  }
})

/*
 *  movie_attributes table SQL queries below here.
 */

/*
 *
 */
router.get('/movies-attributes', async (request, response) => {
  const getAllMoviesAttributesQuery = 'SELECT * FROM movie_attributes'

  console.log(`Querying the Postgres database with: ${getAllMoviesAttributesQuery}`)

  try {
    const { rows } = await client.query(getAllMoviesAttributesQuery)
    return response.status(200).json(rows)
  } catch (error) {
    throw new Error(error)
  }
})

/*
 *
 */
router.get('/movies-attributes/:movie_id', async (request, response) => {
  const movie_id = request.params.movie_id

  const getMovieAttributesLikeIdQuery = `SELECT * FROM movie_attributes WHERE movie_id LIKE '${movie_id}'`

  console.log(`Querying the Postgres database with: ${getMovieAttributesLikeIdQuery}`)

  try {
    const { rows } = await client.query(getMovieAttributesLikeIdQuery)
    return response.status(200).json(rows)
  } catch (error) {
    throw new Error(error)
  }
})

/*
 *  movie_attributes table SQL queries above here.
 */

/*
 *  Get single movie resource by id using default movie id query.
 */
router.get('/:movie_id', async (request, response) => {
  const movie_id = request.params.movie_id // request.query.movie_id

  const getMovieLikeIdQuery = `SELECT * FROM imdb_movies WHERE movie_id LIKE '${movie_id}'`

  console.log(`Querying the Postgres database with: ${getMovieLikeIdQuery}`)

  try {
    const { rows } = await client.query(getMovieLikeIdQuery)
    return response.status(200).json(rows)
  } catch (error) {
    throw new Error(error)
  }
})

module.exports = router
