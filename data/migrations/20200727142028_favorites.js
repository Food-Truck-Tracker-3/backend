
exports.up = function(knex) {
  return knex.schema.createTable('favorites', tbl => {
    tbl.increments();
    tbl.integer('diner_id')
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    tbl.integer('truck_id')
        .references('id')
        .inTable('trucks')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')


  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('favorites')
};
