
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('favorites').del()
    .then(function () {
      // Inserts seed entries
      return knex('favorites').insert([
        {diner_id: 2, truck_id: 1},
        {diner_id: 2, truck_id: 2},
        {diner_id: 2, truck_id: 4},
        {diner_id: 1, truck_id: 3},
        {diner_id: 1, truck_id: 1},
        {diner_id: 1, truck_id: 2}
       
      ]);
    });
};
