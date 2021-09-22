/*
 *  Setup.
 */
const express = require('express')
const cors = require('cors')
const path = require('path')
const config = require('./config')
const { Client } = require('pg')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('react-ui/build'))

/*
 *  Environment variable.
 */
const env = process.env
console.log(env.NODE_ENV)

/*
 *  Client.
 */
const client = new Client({
  host: /* environment.DB_HOST || */ 'localhost',
  user: /* environment.DB_USER || */ 'postgres',
  password: /* environment.DB_PASSWORD || */ '123',
  database: /* environment.DB_NAME || */ 'postgres-imdb-movies',
  port: /* environment.DB_PORT || */ 5432
})

// use try/catch blocks!

/*
 *  Connect to database.
 */
const connectToDatabase = async () => {
  return await client.connect()
}

connectToDatabase()
console.log('Connected to local Postgres database!')

app.get('/', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'react-ui', 'build', 'index.html'))
})

app.get('/api/movies', async (request, response) => {
  const defaultMoviesQuery = 'SELECT * FROM imdb_movies FETCH FIRST 1000 ROWS ONLY'

  console.log(`Querying the Postgres database with: ${defaultMoviesQuery}`)

  await client.query(defaultMoviesQuery, (error, results) => {
    if (error) {
      throw error
    }
    return response.status(200).json(results.rows)
  })
})

app.listen(config.app.port, () => {
  console.log(`Application is running on port ${config.app.port}`)
})
