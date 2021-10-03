/*
 *  Setup.
 */
const config = require('./config')
const { Client } = require('pg')

/*
 *  Set client to the specified configuration database -
 *  local Postgres db for development environment, remote Postgres db for production environment.
 */
const client = new Client({
  connectionString: config.database.connectionString
})

/*
 *  Connect to database.
 */
const connect = async () => {
  return await client.connect()
}

module.exports = { client, connect }
