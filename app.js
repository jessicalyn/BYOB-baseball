const express = require('express');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

const app = express()
app.use(express.json())


//Divisions endpoints
//this method GETs all divisions and return all information if response is okay. If response is not okay, returns 500 response code.
app.get('/api/v1/divisions', (request, response) => {
  database('divisions').select()
    .then((divisions) => {
      response.status(200).json(divisions)
    })
    .catch((error) => {
      response.status(500).json({ error })
    })
})

//this method GETs a specific division by ID and return the information for that division if the response is okay.
//If no division at that ID, returns 422 response with message couldn't find by ID. If response is not okay, returns 500 response code.
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

//This method POSTs (adds) a new division. Name and League are required parameters.
//Errors returned for missing parameters or 500 for server error.
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
//This method GETs all teams and returns the information for all teams if response is okay.
//Returns 500 response code if response is not okay.
app.get('/api/v1/teams', (request, response) => {
  database('teams').select()
    .then((teams) => {
      response.status(200).json(teams)
    })
    .catch((error) => {
      response.status(500).json({ error })
    })
})

//This method GETs a specific team by id and returns the information for that team if the response is okay.
//Errors are 422 if team doesn't exist at that ID or 500 if server response not okay.
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

//This method GETs all teams for a specific division, division id required in URL. Returns all teams data if response okay.
//Errors are 422 status if could not find division by ID or 500 server error.
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

//This method POSTs (adds) a new team. Required parameters: name, stadium_name, website, and division_id.
//Returns the new team's division if the response is okay.
//Errrors are 422 for missing parameters and 500 server error.
app.post('/api/v1/teams', (request, response) => {
  const team = request.body

  for (let requiredParameter of ['name', 'stadium_name', 'website', 'division_id']) {
    if(!team[requiredParameter]) {
      return response
        .status(422)
        .send({
          error: `Expected format: { name: <String>, stadium_name: <String>, website: <String>, division_id: <Number> }. You're missing a "${requiredParameter}" property.`})
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


//This method DELETEs an exisiting team by id and returns 200 response code with message confirming delete if response is okay.
//Errors are 422 if could not find ID for that team or 500 server error.
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

export default app