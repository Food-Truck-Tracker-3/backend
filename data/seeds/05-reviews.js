
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {diner_id: 2, truck_id: 1, rating: 5, review: "delicious" },
        {diner_id: 2, truck_id: 1, rating: 4, review: "a little slow but worth the wait"},
        {diner_id: 2, truck_id: 3, rating: 5, review: "wonderful" },
        {diner_id: 4, truck_id: 1, rating: 3, review:"difficult to eat" },
        {diner_id: 4, truck_id: 4, rating: 4, review: "average" }
      ]);
    });
};
