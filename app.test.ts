import request from 'supertest'
import app from './app'
describe('TODO api', () => {
  it('GET /todos/{userName} --> return array of todos', () => {
    return request(app)
      .get('/todos/tommy')
      .expect('Content-Type', /json/)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              name: expect.any(String),
              id: expect.any(Number),
              user: expect.any(String),
            }),
          ])
        )
      })
  })

  it('POST /todos/{userName} --> create a todo item of a specific user', () => {})
})
