/*
 *  Setup.
 */
const express = require('express')
const database = require('../database')

const router = express.Router()

const client = database.client

/*
 *  Get all names resources using default names query.
 */
router.get('/', async (request, response) => {
  const defaultAllNamesQuery = 'SELECT * FROM imdb_names FETCH FIRST 10000 ROWS ONLY'

  console.log(`Querying the Postgres database with: ${defaultAllNamesQuery}`)

  await client.query(defaultAllNamesQuery, (error, results) => {
    if (error) {
      console.error(error)
    }
    return response.status(200).json(results.rows)
  })
})

/*
 *  Get single name resource by id using default name id query.
 */
router.get('/:name_id=:name_id', async (request, response) => {
  const name_id = request.params.name_id

  const defaultSingleNameQuery = `SELECT * FROM imdb_names WHERE name_id LIKE '${name_id}'`

  console.log(`Querying the Postgres database with: ${defaultSingleNameQuery}`)

  await client.query(defaultSingleNameQuery, (error, results) => {
    if (error) {
      console.error(error)
    }
    return response.status(200).json(results.rows)
  })
})

module.exports = router
