/*
 *  Setup.
 */
const express = require('express')
const config = require('./config')
const cors = require('cors')
const path = require('path')
const movieRoutes = require('./routes/movieRoutes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('react-ui/build'))

// Environment variable.
const env = process.env

/*
 *
 */
app.get('/', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'react-ui', 'build', 'index.html'))
})

/*
 *  Movie routes.
 */
app.use('/api/movies', movieRoutes)

app.listen(config.app.port, () => {
  console.log(`Application is running on port ${config.app.port}`)
})
