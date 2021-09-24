/*
 *  Setup.
 */
const express = require('express')
const database = require('../database')

const router = express.Router()

const client = database.client

/*
 *  Get all principals resources using default principals query.
 */
router.get('/', async (request, response) => {
  const defaultAllPrincipalsQuery = 'SELECT * FROM imdb_principals FETCH FIRST 10000 ROWS ONLY'

  console.log(`Querying the Postgres database with: ${defaultAllPrincipalsQuery}`)

  await client.query(defaultAllPrincipalsQuery, (error, results) => {
    if (error) {
      console.error(error)
    }
    return response.status(200).json(results.rows)
  })
})

/*
 *  Get single principal resource by id using default principal id query.
 *
 *  INVESTIGATE ISSUES!!!
 * 
 */
router.get('/:name_id/:name_order_index/:movie_id', async (request, response) => {
  const movie_id = request.params.movie_id
  const name_order_index = parseInt(request.params.name_order_index)
  const name_id = request.params.name_id

  const defaultSinglePrincipalQuery = `SELECT * FROM imdb_principals WHERE movie_id LIKE '${movie_id}' AND name_order_index = ${name_order_index} AND name_id LIKE '${name_id}'`

  console.log(`Querying the Postgres database with: ${defaultSinglePrincipalQuery}`)

  await client.query(defaultSinglePrincipalQuery, (error, results) => {
    if(error) {
      console.error(error)
    }
    console.log(results)
    return response.status(200).json(results)
  })
})

module.exports = router
