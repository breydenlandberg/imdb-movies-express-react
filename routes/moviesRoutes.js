/*
 *  Setup.
 */
const express = require('express')
const database = require('../database')

const router = express.Router()

const client = database.client

/*
 *  Get all movies resources using default movies query.
 */
router.get('/', async (request, response) => {
  const defaultAllMoviesQuery = 'SELECT * FROM imdb_movies FETCH FIRST 10000 ROWS ONLY'

  console.log(`Querying the Postgres database with: ${defaultAllMoviesQuery}`)

  await client.query(defaultAllMoviesQuery, (error, results) => {
    if (error) {
      console.error(error)
    }
    return response.status(200).json(results.rows)
  })
})

/*
 *  Get single movie resource by id using default movie id query.
 */
router.get('/:id', async (request, response) => {
  const id = request.params.id
  const defaultSingleMovieQuery = `SELECT * FROM imdb_movies WHERE movie_id LIKE \'${id}\'`

  console.log(`Querying the Postgres database with: ${defaultSingleMovieQuery}`)

  await client.query(defaultSingleMovieQuery, (error, results) => {
    if (error) {
      console.error(error)
    }
    return response.status(200).json(results.rows)
  })
})

module.exports = router
