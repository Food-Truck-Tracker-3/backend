
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trucks').del()
    .then(function () {
      // Inserts seed entries
      return knex('trucks').insert([
        {operator_id: 1, name: "Biscuit Boy", description: "Southern Biscuits with a New Mexico Twist", cuisine: "Southern", city: "Albuquerque" , hours:"Breakfast" },
        {operator_id: 3, name: "Taco-Rama", description: "All the tacos, all the time" , cuisine: 'Tacos', city: 'Los Angeles' , hours: "All-Day" },
        {operator_id: 1, name: "Sopapizza", description: "Delicious Pizza with a sopapilla crust" , cuisine: "Italian" , city: "Albuquerque", hours:"Lunch" },
        {operator_id: 1, name: "RoadRunner" , description: "classic New Mexican to-go", cuisine:"New Mexican" , city: "Santa Fe" , hours:"dinner" }
      
      ]);
    });
};
