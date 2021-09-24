/*
 *  Setup.
 */
const config = require('./config')
const { Client } = require('pg')

/*
 *  Client.
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
