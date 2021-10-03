/*
 *  Setup, including database client and router.
 */
const express = require('express')
const database = require('../../database')
const client = database.client

const router = express.Router()

/*
 *  NOTICE: All endpoint requests are asynchronous because querying a remote database may take quite some time before rows are returned.
 *
 *  NOTICE: WRITE ERROR HANDLING MIDDLEWARE!!!
 *
 *  NOTICE: REFACTOR QUERIES INTO STORED PROCEDURES
 * 
 *  NOTICE: Implement request.query over request.params in some endpoints.
 * 
 *  NOTICE: Some custom queries should be in namesRoutes.js and vice versa.
 * 
 *  NOTICE: Describe common structure for all endpoint code blocks.
 */

/*
 *  BEGIN SQL queries on movie resources.
 */

/*
 *  DESCRIPTION: ENDPOINT for all movies.
 *
 *  FULL ROUTE: {baseURL}/api/movies/
 *
 *  QUERY RETURNS: All movie resources.
 */
router.get('/', async (request, response) => {
  const queryGetAllMovies = 'SELECT * FROM imdb_movies WHERE movie_description IS NOT NULL ORDER BY length(movie_description) DESC FETCH FIRST 100 ROWS ONLY'

  console.log(`Querying the Postgres database with: ${queryGetAllMovies}`)

  try {
    const { rows } = await client.query(queryGetAllMovies)
    return response.status(200).json(rows)
  } catch (error) {
    throw new Error(error)
  }
})

/*
 *  DESCRIPTION: ENDPOINT for an individual movie.
 *
 *  FULL ROUTE: {baseURL}/api/movies/{movie_id}
 *
 *  QUERY RETURNS: Single movie resource associated with the matching movie_id.
 */
router.get('/:movie_id', async (request, response) => {
  const movie_id = request.params.movie_id

  const queryGetMovieLikeId = `SELECT * FROM imdb_movies WHERE movie_id LIKE '${movie_id}'`

  console.log(`Querying the Postgres database with: ${queryGetMovieLikeId}`)

  try {
    const { rows } = await client.query(queryGetMovieLikeId)
    return response.status(200).json(rows)
  } catch (error) {
    throw new Error(error)
  }
})

/*
 *  END SQL queries on movie resources.
 */

/*
 *  BEGIN SQL queries on movie attribute resources.
 */

/*
 *  DESCRIPTION: ENDPOINT for all movies attributes.
 *
 *  FULL ROUTE: {baseURL}/api/movies/attributes
 *
 *  QUERY RETURNS: All movies attributes resources.
 */
router.get('/attributes', async (request, response) => {
  const queryGetAllMoviesAttributes = 'SELECT * FROM movie_attributes'

  console.log(`Querying the Postgres database with: ${queryGetAllMoviesAttributes}`)

  try {
    const { rows } = await client.query(queryGetAllMoviesAttributes)
    return response.status(200).json(rows)
  } catch (error) {
    throw new Error(error)
  }
})

/*
 *  DESCRIPTION: ENDPOINT for all movie attributes for a single movie.
 *
 *  FULL ROUTE: {baseURL}/api/movies/attributes/{movie_id}
 *
 *  QUERY RETURNS: All movie attributes resources associated with the matching movie_id.
 */
router.get('/attributes/:movie_id', async (request, response) => {
  const movie_id = request.params.movie_id

  const queryGetMovieAttributesLikeId = `SELECT * FROM movie_attributes WHERE movie_id LIKE '${movie_id}'`

  console.log(`Querying the Postgres database with: ${queryGetMovieAttributesLikeId}`)

  try {
    const { rows } = await client.query(queryGetMovieAttributesLikeId)
    return response.status(200).json(rows)
  } catch (error) {
    throw new Error(error)
  }
})

/*
 *  END SQL queries on movie attribute resources.
 */

/*
 *  BEGIN advanced SQL queries on movie or movie attribute resources.
 */

/*
 *  DESCRIPTION: ENDPOINT for all movies and roles that a single name has been in.
 *
 *  FULL ROUTE: {baseURL}/api/movies/custom-query/name-movies-roles/{name_id}
 *
 *  QUERY RETURNS: All movies and roles resources associated with the matching name_id.
 */
router.get('/custom-query/name-movies-roles/:name_id', async (request, response) => {
  const name_id = request.params.name_id

  // Perhaps don't need to join imdb_names?
  const queryGetNameMoviesRoles = `SELECT imdb_movies.movie_title, imdb_principals.name_role
                                   FROM imdb_names
                                   INNER JOIN imdb_principals ON imdb_names.name_id = imdb_principals.name_id
                                   INNER JOIN imdb_movies ON imdb_principals.movie_id = imdb_movies.movie_id
                                   WHERE imdb_names.name_id LIKE '${name_id}'`

  console.log(`Querying the Postgres database with: ${queryGetNameMoviesRoles}`)

  try {
    const { rows } = await client.query(queryGetNameMoviesRoles)
    return response.status(200).json(rows)
  } catch (error) {
    throw new Error(error)
  }
})

/*
 *  END advanced SQL queries on movie or movie attribute resources.
 */

module.exports = router
