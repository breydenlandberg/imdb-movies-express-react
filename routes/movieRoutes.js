const express = require('express')
const config = require('../config')
const { Client } = require('pg')
const sqlQueries = require('../sqlQueries')

const router = express.Router()

const { user, password, host, port, database } = config.database

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

router.get('/api/movies', async (request, response) => {
  console.log(`Querying the Postgres database with: ${sqlQueries.default.moviesQuery}`)

  await client.query(sqlQueries.default.moviesQuery, (error, results) => {
    if (error) {
      throw error
    }
    return response.status(200).json(results.rows)
  })
})

module.exports = router
