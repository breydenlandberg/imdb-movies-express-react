/*
 *  Setup.
 */
const express = require('express')
const config = require('../config')
const { Client } = require('pg')
const sqlQueries = require('../sql-queries/sqlQueries')

const router = express.Router()

/*
 *  Client.
 */
const client = new Client({
  connectionString: config.database.connectionString
})

/*
 *  Connect to database.
 */
const connectToDatabase = async () => {
  return await client.connect()
}

connectToDatabase()
console.log('Connected to local Postgres database!')

/*
 *  Get movies using default movies query.
 */
router.get('/', async (request, response) => {
  console.log(`Querying the Postgres database with: ${sqlQueries.default.allMoviesQuery}`)

  await client.query(sqlQueries.default.allMoviesQuery, (error, results) => {
    if (error) {
      throw error
    }
    return response.status(200).json(results.rows)
  })
})

/*
 *  Get movie by id using default movie id query.
 */
// router.get('/:id', async (request, response) => {
//   console.log(`Querying the Postgres database with: ${sqlQueries.default.singleMovieQuery}`)

//   const id = request.params.id

//   await client.query(sqlQueries.default.singleMovieQuery, (error, results) => {
//     if (error) {
//       throw error
//     }
//     return response.status(200).json(results.rows)
//   })
// })

module.exports = router
