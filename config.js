/*
 *  Config.
 */
const env = process.env

/*
 *
 *
 *  NOTICE: Prefer connectionString over individual properties because deploying to Heroku.
 *
 *
 */

const development = {
  app: {
    port: 9001
  },
  database: {
    connectionString: 'postgresql://postgres:123@localhost:5432/postgres-imdb-movies'
  }
}

const production = {
  app: {
    port: env.PORT
  },
  database: {
    connectionString: env.DATABASE_URL
  }
}

const config = {
  development,
  production
}

module.exports = config[env.NODE_ENV]
