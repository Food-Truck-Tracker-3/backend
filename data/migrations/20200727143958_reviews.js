
exports.up = function(knex) {
  return knex.schema.createTable('reviews', tbl => {
    tbl.increments();

    tbl.integer('diner_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    tbl.integer('truck_id')
        .notNullable()
        .references('id')
        .inTable('trucks')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    tbl.integer('rating').notNullable()
    tbl.string('review', 2500)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('reviews')
};
