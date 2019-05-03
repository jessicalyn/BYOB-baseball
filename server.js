const express = require('express');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

const app = express()
app.use(express.json())
app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'), () => console.log(`Example app listening on port ${app.get('port')}`))

//Divisions endpoints

app.get('/api/v1/divisions', (request, response) => {
  database('divisions').select()
    .then((divisions) => {
      response.status(200).json(divisions)
    })
    .catch((error) => {
      response.status(500).json({ error })
    })
})

app.get('/api/v1/divisions/:id', (request, response) => {
  database('divisions').where('id', request.params.id).select()
    .then((division) => {
      if (division.length) {
        response.status(200).json(division)
      } else {
        response.status(422).json(`Could not find division with id ${request.params.id}`)
      }
    })
    .catch(error => {
      response.status(500).json({ error })
    })
})

app.post('/api/v1/divisions', (request, response) => {
  const division = request.body

  for (let requiredParameter of ['name', 'league']) {
    if(!division[requiredParameter]) {
      return response
        .status(422)
        .send({
          error: `Expected format: { name: <String>, league: <String> }. You're missing a "${requiredParameter}" property.`})
    }
  }

  database('divisions').insert(division, 'id')
    .then(division => {
      response.status(201).json({ id: division[0] })
    })
    .catch(error => {
      response.status(500).json({ error })
    })
})

//Teams endpoints

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
      response.status(422).json({
        error: `Could not find team with id ${request.params.id}`
      })
    }
  })
  .catch(error => {
    response.status(500).json({ error })
  })
})

app.get('/api/v1/divisions/:id/teams', (request, response) => {
  database('teams').where('id', request.params.id).select()
    .then((teams) => {
      if (teams.length) {
        response.status(200).json(teams)
      } else {
        response.status(422).json({
          error: `Could not find division with id ${request.params.id}`
        })
      }
    })
    .catch((error) => {
      response.status(500).json({ error })
    })
})

app.post('/api/v1/teams', (request, response) => {
  const team = request.body

  for (let requiredParameter of ['name', 'stadium_name', 'website', 'division_id']) {
    if(!team[requiredParameter]) {
      return response
        .status(422)
        .send({
          error: `Expected format: { name: <String>, stadium_name: <String>, website: <String>, division_id: <String> }. You're missing a "${requiredParameter}" property.`})
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

app.delete('/api/v1/teams/:id', (request, response) => {
  database('teams').where('id', request.params.id).del()
    .then(res => {
      if (res > 0) {
        response.status(200).json(`Deleted Team ${request.params.id}`)
      } else {
        response.status(422).json({
          error: `Could not find team with id ${request.params.id}`
        })
      }
    })
    .catch(error => {
      response.status(500).json({ error: "OOPS" })
    })
})