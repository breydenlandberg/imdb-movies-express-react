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
  const getAllMoviesQuery = 'SELECT * FROM imdb_movies FETCH FIRST 10000 ROWS ONLY'

  console.log(`Querying the Postgres database with: ${getAllMoviesQuery}`)

  try {
    const { rows } = await client.query(getAllMoviesQuery)
    return response.status(200).json(rows)
  } catch (error) {
    throw new Error(error)
  }
})

/*
 *  Get single movie resource by id using default movie id query.
 */
router.get('/', async (request, response) => {
  const movie_id = request.query.movie_id

  const getMovieLikeIdQuery = `SELECT * FROM imdb_movies WHERE movie_id LIKE '${movie_id}'`

  console.log(`Querying the Postgres database with: ${getMovieLikeIdQuery}`)

  try {
    const { rows } = await client.query(getMovieLikeIdQuery)
    return response.status(200).json(rows)
  } catch (error) {
    throw new Error(error)
  }
})

/*
 *  Get single movie resource by title using default movie title query (used for searches by movie title).
 */
router.get('/', async (request, response) => {
  const movie_title = request.query.movie_title
  const getMoviesLikeTitleQuery = `SELECT * FROM imdb_movies WHERE movie_title LIKE '%${movie_title}'%`

  console.log(`Querying the Postgres database with: ${getMoviesLikeTitleQuery}`)

  try {
    const { rows } = await client.query(getMoviesLikeTitleQuery)
    return response.status(200).json(rows)
  } catch (error) {
    throw new Error(error)
  }
})

module.exports = router
