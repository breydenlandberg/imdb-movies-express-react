/*
 *  Environment variable.
 */
const env = process.env

/*
 *  Configuration will change depending on whether the environment is development or production.
 *
 *  NOTICE: Prefer connectionString for connecting to database over individual properties because
 *          Heroku prefers usage of connectionString with the process.env.DATABASE_URL, as opposed to
 *          individual variables.
 */

/*
 *  Test configuration.
 */
const test = {
  app: {
    port: 9001
  },
  database: {
    connectionString: 'postgresql://postgres:123@localhost:5432/postgres-imdb-movies'
  }
}

/*
 *  Development configuration.
 */
const development = {
  app: {
    port: 9001
  },
  database: {
    connectionString: 'postgresql://postgres:123@localhost:5432/postgres-imdb-movies'
  }
}

/*
 *  Production configuration.
 */
const production = {
  app: {
    port: env.PORT
  },
  database: {
    connectionString: env.DATABASE_URL
  }
}

/*
 *  Choose which configuration is used based on the process.env.NODE_ENV variable.
 */
const config = {
  test,
  development,
  production
}

module.exports = config[env.NODE_ENV]
