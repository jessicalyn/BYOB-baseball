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