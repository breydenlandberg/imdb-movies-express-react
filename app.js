/*
 *  Setup.
 */
const express = require('express')
const config = require('./config')
const cors = require('cors')
const path = require('path')
const database = require('./database')
const moviesRoutes = require('./routes/moviesRoutes')
const namesRoutes = require('./routes/namesRoutes')
const principalsRoutes = require('./routes/principalsRoutes')

const app = express()
// Environment variable.
const env = process.env

app.use(cors())
app.use(express.json())
app.use(express.static('react-ui/build'))

database.connect()
console.log('Connected to Postgres database!')

// assert? proper try/catch blocks? exception/error handling?

/*
 *
 */
app.get('/', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'react-ui', 'build', 'index.html'))
})

/*
 *  Movies routes.
 */
app.use('/api/movies', moviesRoutes)

/*
 *  Names routes.
 */
app.use('/api/names', namesRoutes)

/*
 *  Principals routes.
 */
app.use('/api/principals', principalsRoutes)

app.listen(config.app.port, () => {
  console.log(`Application is running on port ${config.app.port}`)
})
