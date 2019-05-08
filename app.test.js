import app from './app'
import request from 'supertest'
import divisionsData from './db/divisionsData'

const environment = process.env.NODE_ENV || 'development'
const configuration = require('./knexfile.js')[environment]
const database = require('knex')(configuration)

describe('/api/v1', () => {
  beforeEach(async () => {
    await database.seed.run()
  })

  describe('DELETE /teams/:id', () => {
    it('should be able to delete a specific team', async () => {
      const teamToDelete = await database('teams').first()
      const id = teamToDelete.id

      const response = await request(app).delete(`/api/v1/teams/${id}`)

      expect(response.status).toBe(200)
      expect(response.body).toBe(`Deleted Team ${id}`)
    })

    it('should return a 422 status with error message when no team', async () => {
      const id = 0

      const response = await request(app).delete(`/api/v1/teams/${id}`)

      expect(response.status).toBe(422)
      
    })
  });

  describe('POST /divisions', () => {
    it('should be able to add a new division', async () => {
      const divisionToAdd = { name: "Jessica's Division", "league": "American" }

      const response = await request(app).post('/api/v1/divisions').send(divisionToAdd)
      const divisions = await database('divisions').where('id', response.body.id).select()

      const division = divisions[0]

      expect(response.status).toBe(201)
      expect(division.name).toBe(divisionToAdd.name)
    })
  })
})