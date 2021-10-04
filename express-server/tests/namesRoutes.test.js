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
  test('GET request to names (imdb_names) returns content type JSON', async () => {
    await API.get('/api/names')
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

  test('GET request to names (imdb_names) for a specific name resource using name_id returns content type JSON', async () => {
    await API.get('/api/names/nm0001893')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  /*
   *  Why isn't this working?
   */
  test('GET request to names (imdb_names) for a specific name resource using name_id returns the correct data schema/model', async () => {
    await API.get('/api/names/nm0001893')
      .expect(200)
      .expect([{
        name_id: 'nm0001893',
        current_name: 'John Archer',
        birth_name:	'Ralph Skipwith Bowman',
        biography: "Born Ralph Bowman, the future film and TV star moved to California with his family when he was five; he attended Hollywood High and the University of Southern California. He first set his sights on a job behind the camera, taking a cinematography course at USC, but then couldn't even land an entry-level position. He later drifted into acting, on stage at the Ben Bard Playhouse and in serials at Universal and Republic. He then entered a radio contest, \"Jesse Lasky's Gateway to Hollywood\", where aspiring actors competed for a studio contract. The top prize, an RKO contract made out in the name of \"John Archer\", was won by Bowman after 13 weeks of competition (edging out Hugh Beaumont for the prize and the \"Archer\" name). The actor quips, \"I went from being a Bowman to an Archer!\" He has four children, two by wife number one Marjorie Lord (one of whom is Anne Archer) and two by his second wife Ann Leddy (whom he married in 1956).",
        birth_details: 'May 8, 1915 in Osceola, Nebraska, USA',
        death_details: 'December 3, 1999 in Redmond, Washington, USA  (lung cancer)'
      }])
  })

  /*
   *  Need to handle differently in namesRoutes.
   */
  test('Faulty GET request to names (imdb_names) for a specific name resource using name_id catches and throws Error', async () => {
    await API.get('/api/names/nmDoesNotExist')
      .expect(200)
      .expect((response) => Error)
  })

  test('GET request to names/characters (principal_characters) returns content type JSON', async () => {
    await API.get('/api/names/characters')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('GET request to names/characters (principal_characters) for a specific name using name_id returns content type JSON', async () => {
    await API.get('/api/names/characters/nm0001893')
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

  test('GET request to joined tables using movie_id and advanced query returns content type JSON', async () => {
    await API.get('/api/names/advanced-query/movie-names-roles-characters/tt5291604')
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
