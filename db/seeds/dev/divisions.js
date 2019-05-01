const divisionsData = require('../../divisionsData')

const createDivisions = (knex, division) => {
  return knex('divisions').insert({
    name: division.name,
    league: division.league
  }, 'id')
  .then(divisionId => {
    let teamPromises = [];

    division.teams.forEach(team => {
      teamPromises.push(
        createTeam(knex, {
          name: team.name,
          division_id: divisionId[0],
          stadium_name: team.stadium_name,
          website: team.website,
          division_name: team.division_name
        })
      )
    });

    return Promise.all(teamPromises);
  })
};

const createTeam = (knex, team) => {
  return knex('teams').insert(team);
};

exports.seed = (knex, Promise) => {
  return knex('teams').del()
    .then(() => knex('divisions').del())
    .then(() => {
      let divisionPromises = [];

      divisionsData.forEach(division => {
        divisionPromises.push(createDivisions(knex, division));
      });

      return Promise.all(divisionPromises);
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
