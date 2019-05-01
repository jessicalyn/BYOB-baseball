exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('teams', function(table) {
      table.string('division_name');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('teams', function(table) {
      table.dropColumn('division_name');
    })
  ]);
};