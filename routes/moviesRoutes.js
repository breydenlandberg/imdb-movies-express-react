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
  const defaultAllMoviesQuery = 'SELECT * FROM imdb_movies FETCH FIRST 10000 ROWS ONLY'

  console.log(`Querying the Postgres database with: ${defaultAllMoviesQuery}`)

  try {
    const { rows } = await client.query(defaultAllMoviesQuery)
    return response.status(200).json(rows)
  } catch (error) {
    throw new Error(error)
  }
})

/*
 *  Get single movie resource by id using default movie id query.
 */
router.get('/:movie_id', async (request, response) => {
  const movie_id = request.params.movie_id

  const defaultSingleMovieQuery = `SELECT * FROM imdb_movies WHERE movie_id LIKE '${movie_id}'`

  console.log(`Querying the Postgres database with: ${defaultSingleMovieQuery}`)

  try {
    const { rows } = await client.query(defaultSingleMovieQuery)
    return response.status(200).json(rows)
  } catch (error) {
    throw new Error(error)
  }
})

module.exports = router
