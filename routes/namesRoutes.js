/*
 *  Setup.
 */
const express = require('express')
const database = require('../database')
const client = database.client

const router = express.Router()

/*
 *  Get all names resources using default names query.
 */
router.get('/', async (request, response) => {
  const defaultAllNamesQuery = 'SELECT * FROM imdb_names FETCH FIRST 100 ROWS ONLY'

  console.log(`Querying the Postgres database with: ${defaultAllNamesQuery}`)

  try {
    const { rows } = await client.query(defaultAllNamesQuery)
    return response.status(200).json(rows)
  } catch (error) {
    throw new Error(error)
  }
})

/*
 *  principal_characters table SQL queries below here.
 */

/*
 *  Get single name resource by id using default name id query.
 */
router.get('/names-characters', async (request, response) => {
  const defaultAllNamesCharactersQuery = 'SELECT * FROM imdb_principals'

  console.log(`Querying the Postgres database with: ${defaultAllNamesCharactersQuery}`)

  try {
    const { rows } = await client.query(defaultAllNamesCharactersQuery)
    return response.status(200).json(rows)
  } catch (error) {
    throw new Error(error)
  }
})

router.get('/names-characters/:name_id', async (request, response) => {
  const name_id = request.params.name_id

  const defaultSingleNameCharactersQuery = `SELECT * FROM imdb_principals WHERE name_id LIKE '${name_id}'`

  console.log(`Querying the Postgres database with: ${defaultSingleNameCharactersQuery}`)

  try {
    const { rows } = await client.query(defaultSingleNameCharactersQuery)
    return response.status(200).json(rows)
  } catch (error) {
    throw new Error(error)
  }
})

/*
 *  principal_characters table SQL queries above here.
 */

/*
 *  Get all names, their role, and the characters they play for a specific movie by movie id using a custom query.
 *
 *  SHOULD THIS BE IN moviesRoutes?
 */
router.get('/custom-query/movie-names-roles-characters/:movie_id', async (request, response) => {
  const movie_id = request.params.movie_id

  const customMovieNamesRolesCharactersQuery = `SELECT imdb_names.current_name, imdb_principals.name_role, principal_characters.name_characters
                                                FROM imdb_names
                                                INNER JOIN imdb_principals ON imdb_names.name_id = imdb_principals.name_id
                                                LEFT JOIN principal_characters ON imdb_principals.name_id = principal_characters.name_id
                                                WHERE imdb_principals.movie_id LIKE '${movie_id}'
                                                ORDER BY current_name ASC`

  console.log(`Querying the Postgres database with: ${customMovieNamesRolesCharactersQuery}`)

  try {
    const { rows } = await client.query(customMovieNamesRolesCharactersQuery)
    console.log(rows)
    return response.status(200).json(rows)
  } catch (error) {
    throw new Error(error)
  }
})

/*
 *  Get single name resource by id using default name id query.
 */
router.get('/:name_id', async (request, response) => {
  const name_id = request.params.name_id

  const defaultSingleNameQuery = `SELECT * FROM imdb_names WHERE name_id LIKE '${name_id}'`

  console.log(`Querying the Postgres database with: ${defaultSingleNameQuery}`)

  try {
    const { rows } = await client.query(defaultSingleNameQuery)
    return response.status(200).json(rows)
  } catch (error) {
    throw new Error(error)
  }
})

module.exports = router
