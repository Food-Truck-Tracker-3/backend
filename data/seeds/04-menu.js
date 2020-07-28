
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('menu').del()
    .then(function () {
      // Inserts seed entries
      return knex('menu').insert([
        {truck_id:1, name: "Southern Belle" , description: "Buttermilk fried chicken thigh, Fried Apples & Cheddar on choice of biscuit" , price: 9.5 },
        {truck_id: 1, name: "Biscuit and Gravy" , description: "Buttermilk Green Chile Sausage Gravy" , price: 8.25 },
        {truck_id: 2, name: "Carne Asada" , description:'' , price: 3.5 },
        {truck_id: 3, name: "Pepperoni" , description: "sauce, cheese, pepperoni" , price: 5 },
        {truck_id: 4 , name: "Carne Adovada Waffle Cone", description: "Pork slow cooked with red chile served in a house made waffle cone", price: 7.5 },
        {truck_id: 4 , name: "Fry Bread" , price: 2.5 },
        {truck_id: 2, name: "Breakfast" , description: 'Choice of sausage, bacon or chorizo' , price: 3.5},
        {truck_id: 4 , name: "The New Mexican" , description: "Red chile tomato sauce, cheese, green chile, pinon" , price: 5.5 }
        
      ]);
    });
};
