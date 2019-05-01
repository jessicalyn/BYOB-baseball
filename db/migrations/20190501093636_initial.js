exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('teams', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.string('stadium_name');
      table.string('website');
      table.integer('division_id').unsigned()
      table.foreign('division_id')
        .references('divisions.id');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('divisions', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.string('league');

      table.timestamps(true, true);
    })
  ])
};


exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('teams'),
    knex.schema.dropTable('divisions')
  ]);
};