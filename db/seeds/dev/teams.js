exports.seed = function(knex, Promise) {
  return knex('teams').del()
    .then(() => {
      return Promise.all([
        knex('teams').insert({
          name: 'Oakland Athletics', 
          stadium_name: 'Colliseum', 
          website: 'www.as.com',
          division_name: "AL West", 
        }, 'id')
        .then(() => console.log('Seeding complete!'))
        .catch(error => console.log(`Error seeding data: ${error}`))
      ]) 
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};