/*
 *  Config.
 */
const env = process.env

const development = {
  app: {
    port: 9001
  },
  database: {
    user: 'postgres',
    password: '123',
    host: 'localhost',
    port: 5432,
    database: 'postgres-imdb-movies'
  }
}

const production = {
  app: {
    port: env.PORT
  },
  database: {
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    host: env.DB_HOST,
    port: env.DB_PORT,
    database: env.DB_NAME
  }
}

const config = {
  development,
  production
}

module.exports = config[env.NODE_ENV]
