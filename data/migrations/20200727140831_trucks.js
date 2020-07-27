
exports.up = function(knex) {
  return knex.schema.createTable('trucks', tbl => {
    tbl.increments();
    tbl.integer('operator_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    
    tbl.string('name').notNullable();
    tbl.string('description');
    tbl.string('cuisine').notNullable();
    tbl.string('imageUrl');
    tbl.string('city');
    tbl.string('hours');
    tbl.string('current_location')
    
  })
};

exports.down = function(knex) {
 return knex.schema.dropTableIfExists('trucks') 
};
