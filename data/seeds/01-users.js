
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'truck master', password: 'password', email:'truck@master.com' , role: 'operator'},
        {username: 'Angelica', password: 'password', email:'angelica@something.com' , role: 'diner'},
        {username: 'Eliza', password: 'password', email:'eliza@something.com' , role: 'operator'},
        {username: 'Peggy', password: 'password', email:'peggy@something.com' , role: 'diner'},
      ]);
    });
};
