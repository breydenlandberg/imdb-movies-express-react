/*
 *  SQL queries.
 */
const sqlQueries = {
  default: {
    moviesQuery: 'SELECT * FROM imdb_movies FETCH FIRST 1000 ROWS ONLY',
    namesQuery: '',
    principalsQuery: ''
  }
}

module.exports = sqlQueries
