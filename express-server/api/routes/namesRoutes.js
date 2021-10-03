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
 *  NOTICE: Some custom queries should be in moviesRoutes.js and vice versa.
 *
 *  NOTICE: Describe common structure for all endpoint code blocks.
 *
 *  NOTICE: Add user table to Heroku Postgres database?
 *
 *  NOTICE: Ordered by endpoint URL length due to Express precedence mechanics.
 */

/*
 *  DESCRIPTION: ENDPOINT for all names.
 *
 *  FULL ROUTE: {baseURL}/api/names/
 *
 *  QUERY RETURNS: All names resources.
 */
router.get('/', async (request, response) => {
  const queryGetAllNames = 'SELECT * FROM imdb_names FETCH FIRST 100 ROWS ONLY'

  console.log(`Querying the Postgres database with: ${queryGetAllNames}`)

  try {
    const { rows } = await client.query(queryGetAllNames)
    return response.status(200).json(rows)
  } catch (error) {
    throw new Error(error)
  }
})

/*
 *  DESCRIPTION: ENDPOINT for all names characters.
 *
 *  FULL ROUTE: {baseURL}/api/names/characters
 *
 *  QUERY RETURNS: All names characters resources.
 */
router.get('/characters', async (request, response) => {
  const queryGetAllNamesCharacters = 'SELECT * FROM imdb_principals'

  console.log(`Querying the Postgres database with: ${queryGetAllNamesCharacters}`)

  try {
    const { rows } = await client.query(queryGetAllNamesCharacters)
    return response.status(200).json(rows)
  } catch (error) {
    throw new Error(error)
  }
})

/*
 *  DESCRIPTION: ENDPOINT for all name characters for a single name.
 *
 *  FULL ROUTE: {baseURL}/api/names/characters/{name_id}
 *
 *  QUERY RETURNS: All name characters resources associated with the matching name_id.
 */
router.get('/characters/:name_id', async (request, response) => {
  const name_id = request.params.name_id

  const queryGetNameCharactersLikeId = `SELECT * FROM imdb_principals WHERE name_id LIKE '${name_id}'`

  console.log(`Querying the Postgres database with: ${queryGetNameCharactersLikeId}`)

  try {
    const { rows } = await client.query(queryGetNameCharactersLikeId)
    return response.status(200).json(rows)
  } catch (error) {
    throw new Error(error)
  }
})

/*
 *  DESCRIPTION: ENDPOINT for all names, their roles, and their characters for a single movie.
 *
 *  FULL ROUTE: {baseURL}/api/movies/advanced-query/movie-names-roles-characters/{movie_id}
 *
 *  QUERY RETURNS: All names, roles, and characters resources associated with the matching movie_id.
 */
router.get('/advanced-query/movie-names-roles-characters/:movie_id', async (request, response) => {
  const movie_id = request.params.movie_id

  const queryGetMovieNamesRolesCharacters = `SELECT imdb_names.current_name, imdb_principals.name_role, principal_characters.name_characters
                                             FROM imdb_names
                                             INNER JOIN imdb_principals ON imdb_names.name_id = imdb_principals.name_id
                                             LEFT JOIN principal_characters ON imdb_principals.name_id = principal_characters.name_id
                                             WHERE imdb_principals.movie_id LIKE '${movie_id}'
                                             ORDER BY current_name ASC`

  console.log(`Querying the Postgres database with: ${queryGetMovieNamesRolesCharacters}`)

  try {
    const { rows } = await client.query(queryGetMovieNamesRolesCharacters)
    console.log(rows)
    return response.status(200).json(rows)
  } catch (error) {
    throw new Error(error)
  }
})

/*
 *  DESCRIPTION: ENDPOINT for an individual name.
 *
 *  FULL ROUTE: {baseURL}/api/names/{name_id}
 *
 *  QUERY RETURNS: Single name resource associated with the matching name_id.
 */
router.get('/:name_id', async (request, response) => {
  const name_id = request.params.name_id

  const queryGetNameLikeId = `SELECT * FROM imdb_names WHERE name_id LIKE '${name_id}'`

  console.log(`Querying the Postgres database with: ${queryGetNameLikeId}`)

  try {
    const { rows } = await client.query(queryGetNameLikeId)
    return response.status(200).json(rows)
  } catch (error) {
    throw new Error(error)
  }
})

module.exports = router
