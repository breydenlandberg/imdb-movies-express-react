/*
 *  Setup.
 */
const config = require('./utilities/config')
const app = require('./app')

/*
 *  Run the server on the specified configuration port (port 9001 when using localhost).
 */
app.listen(config.app.port, () => {
  console.log(`Application is running on port ${config.app.port}`)
})
