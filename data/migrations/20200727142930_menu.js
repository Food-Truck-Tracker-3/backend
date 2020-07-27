
exports.up = function(knex) {
  return knex.schema.createTable('menu', tbl => {
    tbl.increments();
    tbl.integer('truck_id')
        .notNullable()
        .references('id')
        .inTable('trucks')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    tbl.string('name').notNullable();
    tbl.string('description')
    tbl.float('price').notNullable()
        
  })

  

};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('menu')
};
