/*
 *  Setup.
 */
const express = require('express')
const cors = require('cors')
const database = require('./database')
const moviesRoutes = require('./api/routes/moviesRoutes')
const namesRoutes = require('./api/routes/namesRoutes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('react-ui/build'))

/*
 *  Connect to either local or remote postgres database (see config.js and database.js for more details).
 */
database.connect()
console.log('Connected to Postgres database!')

/*
 *  Specify the movies routes for the API.
 */
app.use('/api/movies', moviesRoutes)

/*
 *  Specify the names routes for the API.
 */
app.use('/api/names', namesRoutes)

module.exports = app
