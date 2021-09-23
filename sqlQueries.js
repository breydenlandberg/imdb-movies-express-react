/*
 *  SQL queries.
 */
const sqlQueries = {
  default: {
    allMoviesQuery: 'SELECT * FROM imdb_movies FETCH FIRST 1000 ROWS ONLY',
    // singleMovieQuery: `SELECT * FROM imdb_movies WHERE movie_id LIKE ${id}`,
    namesQuery: '',
    principalsQuery: ''
  }
}

module.exports = sqlQueries
