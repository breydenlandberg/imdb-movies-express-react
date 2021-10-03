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
  /*
   *
   */
  test('GET request to movies returns content type JSON', async () => {
    await API.get('/api/movies')
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