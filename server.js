const express = require('express');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

const app = express()
const port = 3000
app.use(express.json())

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/api/v1/divisions', (request, response) => {
  database('divisions').select()
    .then((divisions) => {
      response.status(200).json(divisions)
    })
    .catch((error) => {
      response.status(500).json({ error })
    })
})

app.get('/api/v1/teams', (request, response) => {
  database('teams').select()
    .then((teams) => {
      response.status(200).json(teams)
    })
    .catch((error) => {
      response.status(500).json({ error })
    })
})

app.get('/api/v1/teams/:id', (request, response) => {
  database('teams').where('id', request.params.id).select()
  .then(teams => {
    if (teams.length) {
      response.status(200).json(teams)
    } else {
      response.status(404).json({
        error: `Could not find team with id ${request.params.id}`
      })
    }
  })
  .catch(error => {
    response.status(500).json({ error })
  })
})

app.get('/api/v1/teams/:name', (request, response) => {
  database('teams').where('name', request.params.name).select()
  .then(teams => {
    if (teams.length) {
      response.status(200).json(teams)
    } else {
      response.status(404).json({
        error: `Could not find team with name ${request.params.name}`
      })
    }
  })
  .catch (error => {
    response.status(500).json({ error })
  })
})

app.post('/api/v1/teams', (request, response) => {
  const team = request.body

  for (let requiredParameter of ['name', 'stadium_name', 'website', 'division_name']) {
    if(!team[requiredParameter]) {
      return response
        .status(422)
        .send({
          error: `Expected format: { name: <String>, stadium_name: <String>, website: <String>, division_name: <String> }. You're missing a "${requiredParameter}" property.`})
    }
  }

  database('teams').insert(team, 'id')
    .then(team => {
      response.status(201).json({ id: team[0] })
    })
    .catch(error => {
      response.status(500).json({ error })
    })
})