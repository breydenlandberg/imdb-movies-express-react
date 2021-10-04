/*
 *  Setup.
 *
 *  @jest
 */
const supertest = require('supertest')
const app = require('../app')

/*
 *
 */
const API = supertest(app)

/*
 *
 */
describe('API', () => {
  test('GET request to movies (imdb_movies) returns content type JSON', async () => {
    await API.get('/api/movies')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  // hmmm...
  //
  // test('Faulty GET request to movies (imdb_movies) throws error', async () => {
  //   await API.get('/api/movies')
  //     .expect(200)
  //     .expect(Error)
  // })

  test('GET request to movies (imdb_movies) for a specific movie resource using movie_id returns content type JSON', async () => {
    await API.get('/api/movies/tt5291604')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('GET request to movies (imdb_movies) for a specific movie resource using movie_id returns the correct data schema/model', async () => {
    await API.get('/api/movies/tt5291604')
      .expect(200)
      .expect([{
        movie_id: "tt5291604",
        movie_title:	"Swapnajaal",
        movie_release_year:	2018,
        movie_duration:	141,
        movie_production_company:	"Bengal Creations",
        movie_description:	"Set in the riverside Chandpur suburbs of the '90s, \"Swapnajaal\" at its core is the story of Opu (Yash Rohan) and Shuvra (Pori Moni), two teenagers in 'young love'. Their blooming romance take a dramatic turn south when conniving influential businessman Aynal Gazi (Fazlur Rahman Babu), with the help of his trusted aide Thandu (Iresh Zaker) tactfully oust Shuvra and her family from their home. Opu ...",
        movie_avg_vote:	"7.9",
        movie_votes:	1058,
        movie_user_reviews:	15,
        movie_critic_reviews:	3
      }])
  })

  /*
   *  Need to handle differently in moviesRoutes.
   */ 
  test('Faulty GET request to movies (imdb_movies) for a specific movie resource using movie_id catches and throws Error', async () => {
    await API.get('/api/movies/ttDoesNotExist')
      .expect(200)
      .expect((response) => Error)
  })

  test('GET request to movies/attributes (movie_attributes) returns content type JSON', async () => {
    await API.get('/api/movies/attributes')
    .expect(200)
    .expect('Content-Type', /application\/json/)
  })

  test('GET request to movies/attributes (movie_attributes) for a specific movie resource using movie_id returns content type JSON', async () => {
    await API.get('/api/movies/attributes/tt5291604')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  // test('GET request to movies/attributes (imdb_movies) for a specific movie resource using movie_id returns the correct data schema/model', async () => {
  //   await API.get('/api/movies/attributes/tt5291604')
  //     .expect(200)
  //     .expect([{
  //       movie_id: "tt5291604",
  //       movie_title:	"Swapnajaal",
  //       movie_release_year:	2018,
  //       movie_duration:	141,
  //       movie_production_company:	"Bengal Creations",
  //       movie_description:	"Set in the riverside Chandpur suburbs of the '90s, \"Swapnajaal\" at its core is the story of Opu (Yash Rohan) and Shuvra (Pori Moni), two teenagers in 'young love'. Their blooming romance take a dramatic turn south when conniving influential businessman Aynal Gazi (Fazlur Rahman Babu), with the help of his trusted aide Thandu (Iresh Zaker) tactfully oust Shuvra and her family from their home. Opu ...",
  //       movie_avg_vote:	"7.9",
  //       movie_votes:	1058,
  //       movie_user_reviews:	15,
  //       movie_critic_reviews:	3
  //     }])
  // })

  test('GET request to joined tables using name_id and advanced query returns content type JSON', async () => {
    await API.get('/api/movies/advanced-query/name-movies-roles/tt5291604')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  /*
   *  ... dafuq? This is here to prevent open handles so Jest stops running after testing is complete, but... why? Kinda hacky, no?
   */
  afterAll(async () => {
    await new Promise((resolve) => setTimeout(() => resolve(), 0))
  })
})