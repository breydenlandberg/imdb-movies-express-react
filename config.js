/*
 *  Config.
 */
const env = process.env.NODE_ENV

const development = {
  app: {
    port: 9001
  }
}

const production = {
  app: {

  }
}

const config = {
  development,
  production
}

module.exports = config[env]
